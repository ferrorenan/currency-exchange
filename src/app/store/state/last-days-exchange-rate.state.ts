import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import {inject, Injectable} from '@angular/core';
import {ExchangeService} from "../../services/exchange.service";
import {ExchangeRateActions} from "../actions/exchange-rate.actions";
import {LatestDailyExchangeResponse} from "../../models/latest-daily-exchange-response";

export interface LastDaysExchangeStateModel {
  lastDaysExchangeRate: LatestDailyExchangeResponse;
  isLoading: boolean,
  hasError: boolean,
}

const defaultState: LastDaysExchangeStateModel = {
  lastDaysExchangeRate: {} as LatestDailyExchangeResponse,
  isLoading: false,
  hasError: false,
}

@State<LastDaysExchangeStateModel>({
  name: 'LastDaysExchangeState',
  defaults: defaultState
})

@Injectable()
export class LastDaysExchangeStates {

  private readonly _currencyExchangeService: ExchangeService = inject(ExchangeService);

  constructor() {}

  @Selector()
  static hasError(state: LastDaysExchangeStateModel): boolean {
    return state.hasError;
  }

  @Selector()
  static isLoading(state: LastDaysExchangeStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static getLastDaysExchangeRate(state: LastDaysExchangeStateModel): LatestDailyExchangeResponse {
    return state.lastDaysExchangeRate;
  }

  @Action(ExchangeRateActions.GetLastDaysExchangeRate)
  getLastDaysExchangeRate(ctx: StateContext<LastDaysExchangeStateModel>, { coinIdentifier }: any){

    return this._currencyExchangeService
        .getLastDaysExchangeRate(coinIdentifier)
        .subscribe({
          next: ((lastDaysExchangePayload: LatestDailyExchangeResponse) => {
            ctx.patchState({
              lastDaysExchangeRate: lastDaysExchangePayload,
              hasError: false,
              isLoading: true,
            });
            ctx.dispatch(new ExchangeRateActions.GetLastDaysExchangeRateSuccess());
          }),
          error: ((error) => {
            ctx.patchState({
              lastDaysExchangeRate: {} as LatestDailyExchangeResponse,
              hasError: true,
              isLoading: false
            });
            ctx.dispatch(new ExchangeRateActions.GetLastDaysExchangeRateError());
          }),
        });
  }
}
