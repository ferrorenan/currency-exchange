import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CollapseLastDaysExchangeComponent} from "./collapse-last-days-exchange.component";
import {CardLastExchangeModule} from "../card-last-exchange/card-last-exchange.module";



@NgModule({
  declarations: [
    CollapseLastDaysExchangeComponent
  ],
  imports: [
    CommonModule,
    CardLastExchangeModule
  ],
  exports: [
    CollapseLastDaysExchangeComponent
  ]
})
export class CollapseLastDaysExchangeModule { }
