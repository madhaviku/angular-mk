import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CcDetailsComponent } from "./cc-details/cc-details.component";

import { CcRequestComponent } from "./cc-request/cc-request.component";

const routes: Routes = [
  { path: 'modelling', component: CcRequestComponent },
  { path: 'cc-details', component: CcDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
