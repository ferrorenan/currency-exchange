import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card-item-last-exchange',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './card-item-last-exchange.component.html',
  styleUrl: './card-item-last-exchange.component.scss'
})
export class CardItemLastExchangeComponent {

  @Input({required: true}) title: string;
  @Input({required: true}) value: number;
  @Input() itemIsMoneyValue: boolean = true;
  protected readonly String = String;
}
