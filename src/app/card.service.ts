import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  private cardDetails = new BehaviorSubject<any>({
    cardNumber: '0000 0000 0000 0000',
    cardName: 'madhavi@xyz.com',
    expiryDate: '2022 November ',
    securiyCode: '000',
    amount: 'XXX'
  });

  setpayment(data:any) {
    console.log('set',data)
    this.cardDetails.next(data);
  }

  getpayment() {
    return this.cardDetails.asObservable();
  }

}