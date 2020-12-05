import { Component, OnInit } from "@angular/core";
import { CardService } from "../card.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-cc-details",
  templateUrl: "./cc-details.component.html",
  styleUrls: ["./cc-details.component.css"]
})
export class CcDetailsComponent implements OnInit {
  creditDetails = [];
  displayedColumns = ["number", "name", "date", "ccv", "amount"];
  dataSource = new MatTableDataSource(this.creditDetails);
  constructor(private readonly cardService: CardService) {
    console.log(this.creditDetails);
  }

  ngOnInit() {
    this.cardService.getpayment().subscribe((response: any) => {
      this.creditDetails = response;
      // this.creditDetails.forEach((subList)=>{
      //   subList.dates = subList.expiry.split(',');
      // })
    });
  }
}
