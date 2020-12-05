import { Component } from "@angular/core";
import { CardService } from "../card.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cc-request",
  templateUrl: "./cc-request.component.html",
  styleUrls: ["./cc-request.component.css"]
})
export class CcRequestComponent {
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
}
