import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, retry, switchMap} from "rxjs";
import {ExchangeRateNowResponse} from "../models/exchange-rate-now-response";
import {LatestDailyExchangeResponse} from "../models/latest-daily-exchange-response";

@Injectable()
export class ExchangeService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   *
   * @param { string } from => Parâmetro de qual moeda sera comparada
   */
  getCurrentExchangeRate(from: string): Observable<ExchangeRateNowResponse> {

    return this._httpClient
      .get<ExchangeRateNowResponse>(`currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${from}&to_symbol=BRL`)
      .pipe(
        retry(1)
      );
  }

  /**
   *
   * @param { string } from => Parâmetro de qual moeda sera comparada
   */
  getLastDaysExchangeRate(from: string): Observable<LatestDailyExchangeResponse> {

    return this._httpClient
      .get<LatestDailyExchangeResponse>(`dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${from}&to_symbol=BRL`)
      .pipe(
        retry(1)
      );
  }
}
