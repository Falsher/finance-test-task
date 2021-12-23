import { CREATE_TICKER } from "../redux/types";
const initialState = {
  tickers: [],
};
export const tickersReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TICKER:
      return { ...state, tickers: action.payload };
    default:
      return state;
  }
};
