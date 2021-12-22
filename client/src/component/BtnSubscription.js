import React from "react";
import "material-icons/iconfont/material-icons.css";
const BtnSubscription = ({ btn, ...props }) => {
  return (
    <button {...props} className="btn material-icons-outlined ms-4 p-0">
      {btn}
    </button>
  );
};
export default BtnSubscription;
