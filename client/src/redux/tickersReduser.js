import { CREATE_TICKER } from "../redux/types";

const initialState = {
  createTicker: [],
};
export const tickersReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TICKER:
      return { ...state, createTicker: action.payload };
    default:
      return state;
  }
};
