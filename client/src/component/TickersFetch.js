import React, { useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { PORT_SERV } from "../env/varibl";
import { createTicker } from "../redux/actions";
const socket = io(PORT_SERV);
const TickersFetch = () => {
  // const [tickers, setTickers] = useState([]);

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (data) => {
      console.log(data);
      createTicker(data);
    });
  }, []);
  return <></>;
};
const mapDispatchToProps = {
  createTicker,
};
export default connect(null, mapDispatchToProps)(TickersFetch);
