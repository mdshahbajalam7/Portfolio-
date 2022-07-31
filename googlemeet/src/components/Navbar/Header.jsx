import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TLYFK6hiQ3WRhAmFxqnQs13ycCEDOSbcj42MrqLETVJw2zUdoevlcnYr7_9jfMSgDjA&usqp=CAU"
          alt="logo"
        />
        {/* <span className="text">Meet</span> */}
      </div>
      <div className="fontawesome">
        <i
          style={{ fontSize: "20px", padding: "10px", color: "gray" }}
          className="fa-solid fa-question"
        ></i>
        <i
          style={{ fontSize: "20px", padding: "10px", color: "gray" }}
          className="fa-solid fa-exclamation"
        ></i>
        <i
          style={{ fontSize: "20px", padding: "10px", color: "gray" }}
          className="fa-solid fa-gear"
        ></i>
      </div>
    </div>
  );
}

export default Header;
