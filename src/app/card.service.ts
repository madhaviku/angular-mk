import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CardService {

  private cardDetails = new BehaviorSubject<any>({
    cardNumber: '0000 0000 0000 0000',
    cardName: 'ksmith@fanreact.com',
    expiryDate: '2022 November ',
    securiyCode: '000',
    amount: 'XXX'
  });

  setpaymentDetails(body: any) {
    this.cardDetails.next(body);
  }

  getpaymentDetails() {
    return this.cardDetails.asObservable();
  }

}