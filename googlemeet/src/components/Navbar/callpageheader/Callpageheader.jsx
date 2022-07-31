import React from "react";
import "./Callpageheader.scss";

function Callpageheader() {
  return (
    <div className="frame-header">
      <div className="header-itmes icons">
        <i
          style={{ color: "#505357", fontSize: "22px" }}
          class="fa-solid fa-users"
        ></i>
      </div>
      <div className="header-itmes icons">
        <i
          style={{ color: "#505357", fontSize: "22px" }}
          class="fa-solid fa-message"
        ></i>
        <span className="alert"></span>
      </div>
      <div className="header-itmes current-Time">1:00 PM</div>
      <div className="header-itmes icons">
        <i
          style={{ color: "#505357", fontSize: "22px", color: "green" }}
          class="fa-solid fa-circle-user"
        ></i>
      </div>
    </div>
  );
}

export default Callpageheader;
