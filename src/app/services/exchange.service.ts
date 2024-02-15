import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {ExchangeRateNowResponse} from "../models/exchange-rate-now-response";
import {LatestDailyExchangeResponse} from "../models/latest-daily-exchange-response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
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
      .get<ExchangeRateNowResponse>(`currentExchangeRate?apiKey=${environment.apiKey}&from_symbol=${from}&to_symbol=BRL`)
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
      .get<LatestDailyExchangeResponse>(`dailyExchangeRate?apiKey=${environment.apiKey}&from_symbol=${from}&to_symbol=BRL`)
      .pipe(
        retry(1)
      );
  }
}
