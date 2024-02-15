export interface ExchangeRateNowResponse {
  exchangeRate: number;
  fromSymbol: string;
  lastUpdatedAt: string;
  success: boolean;
  toSymbol: string;
}
