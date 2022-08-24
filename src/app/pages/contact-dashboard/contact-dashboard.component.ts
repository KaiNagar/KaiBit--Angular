import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent implements OnInit {
  constructor(private BitcoinService: BitcoinService) {}

  
  priceMarketData!: any;
  avgTransactionData!: any;
  
  priceColumns = ['', 'Price'];
  transColumn = ['', 'Trans'];
  typeLine = ChartType.Line;
  myOptions = {
    colors: ['blue'],
    // legend: { position: 'top' },
    // curveType:'function',
  };

  ngOnInit(): void {
    this.loadPriceMarket();
    this.loadTransactionAvg()
  }

  async loadPriceMarket() {
    const priceMarketData = await this.BitcoinService.getMarketPrice();
    this.priceMarketData = priceMarketData;
  }
  async loadTransactionAvg() {
    const avgTransactionData =
      await this.BitcoinService.getConfirmedTransactions();
      this.avgTransactionData = avgTransactionData

  }
}
