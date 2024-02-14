import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ExchangeRateNowResponse} from "../../../../models/exchange-rate-now-response";

@Component({
  selector: 'app-card-exchange-rate-now',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './card-exchange-rate-now.component.html',
  styleUrls: ['./card-exchange-rate-now.component.scss']
})
export class CardExchangeRateNowComponent {

  @Input({required: true}) exchangeRateNowPayload$: Observable<ExchangeRateNowResponse>;

}
