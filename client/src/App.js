import React from "react";
import "./App.css";
import Header from "./component/Header";
import ListTicker from "./component/ListTicker";
function App() {
  return (
    <div className="ml2Uge">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <ListTicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
