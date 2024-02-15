import {Component, Input} from '@angular/core';
import {DailyExchangeItemResponse} from "../../../../models/daily-exchange-item-response";

@Component({
  selector: 'app-card-last-exchange',
  templateUrl: './card-last-exchange.component.html',
  styleUrl: './card-last-exchange.component.scss'
})
export class CardLastExchangeComponent {

  @Input({required: true}) lastExchangePayload: DailyExchangeItemResponse;
  @Input({required: true}) previouslyCloseDiffValue: number;
  @Input() class: string;

  /**
   *
   * @param {number} currentCloseDiff Parâmetro de valor do "close" atual
   * Calcula diferença entre closeValue atual e closeValue do dia anterior
   */
  calculateCloseDiff(currentCloseDiff: number): number {

    return ((currentCloseDiff / this.previouslyCloseDiffValue) - 1) * 100;
  }
}
