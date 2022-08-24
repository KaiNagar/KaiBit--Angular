import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  RATE_KEY = 'rateDB';
  rateCache = this.UtilService.loadFromStorage(this.RATE_KEY) || {};

  PRICE_KEY = 'priceDB';
  priceCache = this.UtilService.loadFromStorage(this.PRICE_KEY) || {};

  TRANSACTIONS_KEY = 'transactionDB';
  transactionsCache =
    this.UtilService.loadFromStorage(this.TRANSACTIONS_KEY) || {};

  constructor(private Http: HttpClient, private UtilService: UtilService) {}

  public getRate(coins: number) {
    console.log(coins);
  }

  public async getMarketPrice(range = '5months') {
    if (this.priceCache[range]) {
      // console.log('getting from cache');
      return this.priceCache[range];
    }
    try {
      // console.log('getting from axios');
      const info: any = { title: '', data: [] };
      const PRICE_API = `https://api.blockchain.info/charts/market-price?timespan=${range}&format=json&cors=true#`;
      await this.Http.get<any>(PRICE_API).subscribe((data) => {
        info.title = data.name;
        data.values.forEach((v: any) => {
          info.data.push([moment(v.x * 1000).calendar(), v.y]);
        });
        this.priceCache[range] = info;
        this.UtilService.saveToStorage(this.PRICE_KEY, this.priceCache);
        return info;
      });
    } catch (e) {
      console.error(e);
    }
  }
  public async getConfirmedTransactions(range = '5months') {
    if (this.transactionsCache[range]) {
      // console.log('getting from cache');
      return this.transactionsCache[range];
    }
    try {
      // console.log('getting from axios');
      const info: any = { title: '', data: [] };
      const TRANSACTIONS_API = `https://api.blockchain.info/charts/n-transactions?timespan=${range}&format=json&cors=true#`;
      await this.Http.get<any>(TRANSACTIONS_API).subscribe((data) => {
        info.title = data.name;
        data.values.forEach((v: any) => {
          info.data.push([moment(v.x * 1000).calendar(), v.y]);          
        });
        this.transactionsCache[range] = info;
        this.UtilService.saveToStorage(
          this.TRANSACTIONS_KEY,
          this.transactionsCache
        );
        return info;
      });
    } catch (e) {
      console.error(e);
    }
  }
}
