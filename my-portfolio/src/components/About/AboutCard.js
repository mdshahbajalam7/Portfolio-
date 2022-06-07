import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diksha Sharma </span>
            from <span className="purple"> Delhi, India.</span>
            <br />A Passionate aspiring Frontend Developer moulded and shaped by Masai school's intensive and immensive learning. Looking forward to join a company where I can contribute towards individual and company growth.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in extra curricular activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking Food
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The value of an idea lies in the using of it."{" "}
          </p>
          <footer className="blockquote-footer">Diksha Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
