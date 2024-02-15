import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import {inject, Injectable} from '@angular/core';
import {ExchangeService} from "../../services/exchange.service";
import {ExchangeRateNowResponse} from "../../models/exchange-rate-now-response";
import {ExchangeRateActions} from "../actions/exchange-rate.actions";
import {AlertService} from "../../services/alert.service";

export interface CurrentExchangeStateModel {
  currenctExchange: ExchangeRateNowResponse;
  isLoading: boolean,
  hasError: boolean,
}

const defaultState: CurrentExchangeStateModel = {
  currenctExchange: {} as ExchangeRateNowResponse,
  isLoading: false,
  hasError: false,
}

@State<CurrentExchangeStateModel>({
  name: 'CurrentExchangeState',
  defaults: defaultState
})

@Injectable()
export class CurrentExchangeStates {

  private readonly _currencyExchangeService: ExchangeService = inject(ExchangeService);
  private readonly _alertService: AlertService = inject(AlertService);

  constructor() {}

  @Selector()
  static hasError(state: CurrentExchangeStateModel): boolean {
    return state.hasError;
  }

  @Selector()
  static isLoading(state: CurrentExchangeStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getCurrentExchangeRate(state: CurrentExchangeStateModel): ExchangeRateNowResponse {
    return state.currenctExchange;
  }

  @Action(ExchangeRateActions.GetCurrentExchangeRate)
  getCurrentExchangeRate(ctx: StateContext<CurrentExchangeStateModel>, { coinIdentifier }: any){

    this._alertService
      .showFeedbackClient(
        'Eii..',
        'Por favor, aguarde enquanto obtemos os dados, é rapidinho!',
        'info',
      );

    return this._currencyExchangeService
        .getCurrentExchangeRate(coinIdentifier)
        .subscribe({
          next: ((marketList: ExchangeRateNowResponse) => {
            this._alertService.closeAlert();
            ctx.patchState({
              currenctExchange: marketList,
              hasError: false,
              isLoading: true,
            });
            ctx.dispatch(new ExchangeRateActions.GetCurrentExchangeRateSuccess());
          }),
          error: ((error) => {
            this._alertService.closeAlert();
            ctx.patchState({
              hasError: true,
              isLoading: false
            });
            ctx.dispatch(new ExchangeRateActions.GetCurrentExchangeRateError());
          }),
        });
  }
}
