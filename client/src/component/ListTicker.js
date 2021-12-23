import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import BtnSubscription from "./BtnSubscription";
import { createTicker } from "../redux/actions";
import "../App.css";

const ListTicker = ({ tickers }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createTicker());
  }, [dispatch]);

  const examinationName = (ticker) => {
    if (ticker.ticker === "AAPL") {
      return <span className="bg-dark text-white p-2 rounded-3">Apple</span>;
    } else if (ticker.ticker === "GOOGL") {
      return (
        <span className="bg-danger text-white p-2 rounded-3">Alphabet</span>
      );
    } else if (ticker.ticker === "MSFT") {
      return (
        <span className="bg-secondary text-white p-2 rounded-3">Microsoft</span>
      );
    } else if (ticker.ticker === "AMZN") {
      return (
        <span className="bg-warning text-white p-2 rounded-3">Amazon</span>
      );
    } else if (ticker.ticker === "FB") {
      return <span className="bg-primary text-white p-2 rounded-3">Meta</span>;
    }
    return <span className="bg-pink text-white p-2 rounded-3">Tesla</span>;
  };

  return (
    <div>
      <h5 className="text-center">Самые популярные акции Google</h5>
      <ul className="d-flex justify-content-between mt-4">
        {tickers.map((ticker) => {
          return (
            <li
              key={ticker.ticker}
              className="border list-group-item rounded-3  border-secondary d-flex justify-content-between  align-items-center"
            >
              {examinationName(ticker)}
              {ticker.price}$
              <BtnSubscription btn={`control_point`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tickers: state.tickers.createTicker,
  };
};
export default connect(mapStateToProps, null)(ListTicker);
