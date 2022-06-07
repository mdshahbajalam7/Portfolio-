import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button style={{paddingLeft :"20px" , border:"2px solid black", gap:"3px", margin:"10px" }} variant="primary" href={props.link} target="_blank">
          <BiLinkExternal />
           &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button style={{paddingLeft :"20px" , border:"2px solid black" ,gap:"3px", margin:"10px"}} variant="primary" href={props.Glink} target="_blank">
          <BiLinkExternal />
           &nbsp;
          {props.isBlog ? "View Blog" : "GitHub Link"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
