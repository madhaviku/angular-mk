import { Component } from "@angular/core";
import {Router} from '@angular/router';

/** @title Simple form field */
@Component({
  selector: "cc-modelling",
  templateUrl: "cc-modelling.html",
  styleUrls: ["./cc-modelling.css"]
})
export class CcModelling {
  constructor(private readonly router: Router,){}
  makePayment(){
    this.router.navigate(['/modelling']);
  }

  seeDetails(){
    this.router.navigate(['/cc-details']);
  }
}
