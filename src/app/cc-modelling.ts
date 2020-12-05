import { Component } from "@angular/core";
import { CardService } from "./card.service";

/** @title Simple form field */
@Component({
  selector: "cc-modelling",
  templateUrl: "cc-modelling.html",
  styleUrls: ["./cc-modelling.css"]
})
export class CcModelling {
  cardNumber: string;
  cardName: string;
  expiry: string;
  securityCode: string;
  amount: string;

  constructor(private cardService: CardService) {}

  submitData() {
    const paymentData = {
      cardNumber: this.cardNumber,
      cardName: this.cardName,
      expiry: this.expiry,
      securityCode: this.securityCode,
      amount: this.amount
    };
    this.cardService.setpayment(paymentData);
  }
}
