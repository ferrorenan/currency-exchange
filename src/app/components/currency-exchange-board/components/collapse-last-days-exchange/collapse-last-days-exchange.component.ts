import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {LatestDailyExchangeResponse} from "../../../../models/latest-daily-exchange-response";
import {Select} from "@ngxs/store";
import {CurrentExchangeStates} from "../../../../store/state/current-exchange-rate.state";
import {ExchangeRateNowResponse} from "../../../../models/exchange-rate-now-response";
import {LastDaysExchangeStates} from "../../../../store/state/last-days-exchange-rate.state";

@Component({
  selector: 'app-collapse-last-days-exchange',
  templateUrl: './collapse-last-days-exchange.component.html',
  styleUrl: './collapse-last-days-exchange.component.scss'
})
export class CollapseLastDaysExchangeComponent {

  @Select(LastDaysExchangeStates.getLastDaysExchangeRate) lastDaysExchangePayload$: Observable<LatestDailyExchangeResponse>;
  @Select(LastDaysExchangeStates.hasError) hasError$: Observable<boolean>;
}
