import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CcDetailsComponent} from './cc-details/cc-details.component';
import {CcModelling} from './cc-modelling';

const route: Routes = [{
  path: 'modelling',
  component: CcModelling,
},{
  path:'details',
  component : CcDetailsComponent,
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}