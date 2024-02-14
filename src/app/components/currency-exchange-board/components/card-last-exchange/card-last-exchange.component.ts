import {Component, Input} from '@angular/core';
import {DailyExchangeItemResponse} from "../../../../models/daily-exchange-item-response";

@Component({
  selector: 'app-card-last-exchange',
  templateUrl: './card-last-exchange.component.html',
  styleUrl: './card-last-exchange.component.scss'
})
export class CardLastExchangeComponent {

  @Input({required: true}) exchangePayload: DailyExchangeItemResponse;
  @Input() class: string;
}
