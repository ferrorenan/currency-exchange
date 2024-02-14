import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyExchangeBoardComponent} from "./currency-exchange-board.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CardExchangeRateNowComponent} from "./components/card-exchange-rate-now/card-exchange-rate-now.component";
import {ExchangeService} from "../../services/exchange.service";
import {
    CollapseLastDaysExchangeModule
} from "./components/collapse-last-days-exchange/collapse-last-days-exchange.module";



@NgModule({
  declarations: [
    CurrencyExchangeBoardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CardExchangeRateNowComponent,
        CollapseLastDaysExchangeModule
    ],
  exports: [
    CurrencyExchangeBoardComponent
  ],
  providers: [
    ExchangeService
  ]
})
export class CurrencyExchangeBoardModule { }
