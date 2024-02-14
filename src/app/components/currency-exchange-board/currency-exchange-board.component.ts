import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {ExchangeService} from "../../services/exchange.service";
import {CurrencyExchangeForm} from "../../models/currency-exchange-form";
import {Observable} from "rxjs";
import {ExchangeRateNowResponse} from "../../models/exchange-rate-now-response";
import {LatestDailyExchangeResponse} from "../../models/latest-daily-exchange-response";

@Component({
  selector: 'app-currency-exchange-board',
  templateUrl: './currency-exchange-board.component.html',
  styleUrls: ['./currency-exchange-board.component.scss']
})
export class CurrencyExchangeBoardComponent {

  currencyExchangeFormulary: FormGroup<CurrencyExchangeForm> = this._formBuilder
    .group({
    coinIdentification: this._formBuilder.control(
      '',
      { validators: [
        Validators.required,
        Validators.minLength(3)]
      }),
  });

  exchangeRateNowPayload$: Observable<ExchangeRateNowResponse>;
  latestDailyExchangeRatePayload$: Observable<LatestDailyExchangeResponse>

  private readonly _currencyExchangeService: ExchangeService = inject(ExchangeService);

  constructor(
    private _formBuilder: NonNullableFormBuilder,
  ) {}

  protected validateFormField(formGroupContact: FormGroup, field: string): boolean {
    return formGroupContact.controls[field].touched && !formGroupContact.controls[field].valid;
  }

  protected submitFormularyApi(): void {

    if (this.currencyExchangeFormulary.invalid) {
      return;
    }

    const coinToSearchIdentification = this.currencyExchangeFormulary
      .value.coinIdentification;

    if (!coinToSearchIdentification){
      return;
    }

    this.exchangeRateNowPayload$ = this._currencyExchangeService
      .getCurrentExchangeRate(coinToSearchIdentification);

    this.getLatestDailyExchangeRatePayload(coinToSearchIdentification);
  }

  protected getLatestDailyExchangeRatePayload(coinToSearchIdentification: string): void {

    this.latestDailyExchangeRatePayload$ = this._currencyExchangeService
      .getLastDaysExchangeRate(coinToSearchIdentification);
  }
}
