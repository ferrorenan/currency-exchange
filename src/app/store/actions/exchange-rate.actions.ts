export namespace ExchangeRateActions {

  export class GetCurrentExchangeRate {
    static readonly type = '[CurrentExchangeRate] Get CurrentExchangeRate'

    constructor(public readonly coinIdentifier: string) {}
  }

  export class GetCurrentExchangeRateSuccess {
    static readonly type = '[CurrentExchangeRate] Get CurrentExchangeRate Success'
  }

  export class GetCurrentExchangeRateError {
    static readonly type = '[CurrentExchangeRate] Get CurrentExchangeRate Error'
  }

  export class GetLastDaysExchangeRate {
    static readonly type = '[LastDaysExchange] Get LastDaysExchange'

    constructor(public readonly coinIdentifier: string) {}
  }

  export class GetLastDaysExchangeRateSuccess {
    static readonly type = '[LastDaysExchange] Get LastDaysExchange Success'
  }

  export class GetLastDaysExchangeRateError {
    static readonly type = '[LastDaysExchange] Get LastDaysExchange Error'
  }
}
