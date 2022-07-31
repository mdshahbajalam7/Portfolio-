import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../Navbar/Header";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="container">
            <h2>Premium video meeting. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meeting,Goggle Meet, to make it free and available for all
            </p>
            <div className="action-btn">
              <button className="btn green">
                <i
                  style={{ paddingRight: "10px" }}
                  class="fa-solid fa-video"
                ></i>
                New Meeting
              </button>
              <div className="input-url">
                <div className="input-section">
                  <i
                    style={{ position: "absolute", top: "30%", color: "gray" }}
                    class="fa-solid fa-keyboard"
                  ></i>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter a code and url"
                  />
                </div>
                <button className="btn-join">Join</button>
              </div>
            </div>
          </div>
          <div className="help-div">
            <a href="">Learn more</a>about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img
              src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
