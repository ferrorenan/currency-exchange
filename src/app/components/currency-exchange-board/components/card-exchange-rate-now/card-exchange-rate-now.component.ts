import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ExchangeRateNowResponse} from "../../../../models/exchange-rate-now-response";
import {Select} from "@ngxs/store";
import {CurrentExchangeStates} from "../../../../store/state/current-exchange-rate.state";

@Component({
  selector: 'app-card-exchange-rate-now',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './card-exchange-rate-now.component.html',
  styleUrls: ['./card-exchange-rate-now.component.scss']
})
export class CardExchangeRateNowComponent {

  @Select(CurrentExchangeStates.getCurrentExchangeRate) exchangeRateNowPayload1$: Observable<ExchangeRateNowResponse>;
  @Select(CurrentExchangeStates.hasError) hasError$: Observable<boolean>;
}
