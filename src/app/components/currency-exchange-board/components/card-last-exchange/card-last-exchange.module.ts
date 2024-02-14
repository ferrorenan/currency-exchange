import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardLastExchangeComponent} from "./card-last-exchange.component";
import {CardItemLastExchangeComponent} from "../card-item-last-exchange/card-item-last-exchange.component";



@NgModule({
  declarations: [
    CardLastExchangeComponent
  ],
  imports: [
    CommonModule,
    CardItemLastExchangeComponent
  ],
  exports: [
    CardLastExchangeComponent
  ]
})
export class CardLastExchangeModule { }
