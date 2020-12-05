import { Component } from "@angular/core";
import { CardService } from "./card.service";
import { Router } from "@angular/router";

/** @title Simple form field */
@Component({
  selector: "cc-modelling",
  templateUrl: "cc-modelling.html",
  styleUrls: ["./cc-modelling.css"]
})
export class CcModelling {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  securiyCode: string;
  amount: string;

  constructor(
    private cardService: CardService,
    private readonly router: Router
  ) {}

  submitData() {
    const paymentData = {
      cardNumber: this.cardNumber,
      cardName: this.cardName,
      expiryDate: this.expiryDate,
      securiyCode: this.securiyCode,
      amount: this.amount
    };
    this.cardService.setpayment(paymentData);
  }

  viewDetails() {
    this.router.navigate(["/cc-details"]);
  }
}
