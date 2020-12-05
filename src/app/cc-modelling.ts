import {Component} from '@angular/core';
import {CardService} from './card.service';
/** @title Simple form field */
@Component({
  selector: 'cc-modelling',
  templateUrl: 'cc-modelling.html',
  styleUrls: ['./cc-modelling.css'],
})
export class CcModelling {
  card_number = '';
  card_name = '';
  expiry_date = '';
  security = '';
  amount = '';

  constructor(private readonly service : CardService){}

submitData(){
  const paymentData = {
    cardNumber : this.card_number,
    cardName : this.card_name,
    expiry : this.expiry_date,
    securityCode : this.security,
    amount : this.amount
  };
  this.service.getpaymentDetails({
    cardNumber : this.card_number,
    cardName: this.card_name,
    expiryDate : this.expiry_date,
    securityCode : this.security,
    amount: this.amount,
  });

  
}

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */