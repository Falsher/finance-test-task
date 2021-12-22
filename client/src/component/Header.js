import React from "react";
import logo from "../page/googlelogo.png";
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt=""
            height="24"
            className="d-inline-block align-text-top mt-2"
          />
          <span className="ms-2 fs-4">Финансы</span>
        </a>
      </div>
    </nav>
  );
};
export default Header;
