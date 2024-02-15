import {Component} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {CurrencyExchangeForm} from "../../models/currency-exchange-form";
import {Store} from "@ngxs/store";
import {ExchangeRateActions} from "../../store/actions/exchange-rate.actions";

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

  constructor(
    private _formBuilder: NonNullableFormBuilder,
    private _store: Store
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

    this._store.dispatch(new ExchangeRateActions.GetCurrentExchangeRate(coinToSearchIdentification));
    this._store.dispatch(new ExchangeRateActions.GetLastDaysExchangeRate(coinToSearchIdentification));
  }
}
