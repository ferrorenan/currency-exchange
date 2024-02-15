import {DailyExchangeItemResponse} from "./daily-exchange-item-response";

export interface LatestDailyExchangeResponse {
  data: DailyExchangeItemResponse[];
  from: string;
  lastUpdatedAt: string;
  rateLimitExceeded: boolean;
  success: boolean;
  to: string;
}
