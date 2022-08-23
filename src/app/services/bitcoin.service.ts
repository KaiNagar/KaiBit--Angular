import { Injectable } from "@angular/core";

const user = {
    name:'Manoka',
    coins:9999,
    moves:[]
}

@Injectable({
    providedIn: 'root',
  })
  export class BitcoinService {
    public getRate(coins:number){
        console.log(coins);
        
    }

    public getMarketPrice(){
        
    }
    public getConfirmedTransactions(){

    }
  }