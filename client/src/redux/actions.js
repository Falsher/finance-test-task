import { CREATE_TICKER } from "./types";
import io from "socket.io-client";
import { PORT_SERV } from "../env/varibl";
const socket = io(PORT_SERV);

export function createTicker() {
  return (dispatch) => {
    socket.emit("start");
    socket.on("ticker", (data) => {
      dispatch({
        type: CREATE_TICKER,
        payload: data,
      });
    });
  };
}
