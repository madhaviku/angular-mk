import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CardService {
  private cardDetails = new BehaviorSubject<any>([
    {
      cardNumber: "0000 0000 0000 0000",
      cardName: "madhavi@xyz.com",
      expiryDate: "Fri Dec 18 2020 00:00:00 GMT+0530 (India Standard Time)",
      securiyCode: "000",
      amount: "XXX"
    }
  ]);

  setpayment(data: any) {
    console.log("set", data);
    this.cardDetails.next([data]);
  }

  getpayment() {
    return this.cardDetails.asObservable();
  }
}
