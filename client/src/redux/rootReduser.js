import { combineReducers } from "redux";
import { tickersReduser } from "./tickersReduser";

export const rootReduser = combineReducers({
  tickers: tickersReduser,
});
