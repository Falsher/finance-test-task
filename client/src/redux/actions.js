import { CREATE_TICKER } from "./types";
export function createTicker(ticker) {
  return {
    type: CREATE_TICKER,
    payload: ticker,
  };
}
