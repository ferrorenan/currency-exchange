import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {LatestDailyExchangeResponse} from "../../../../models/latest-daily-exchange-response";

@Component({
  selector: 'app-collapse-last-days-exchange',
  templateUrl: './collapse-last-days-exchange.component.html',
  styleUrl: './collapse-last-days-exchange.component.scss'
})
export class CollapseLastDaysExchangeComponent {

  @Input({required: true}) lastDaysPayload: Observable<LatestDailyExchangeResponse>;
}
