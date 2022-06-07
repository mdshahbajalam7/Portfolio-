import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import udemy from "../../Assets/Udemy.png"
import dermstore from "../../Assets/Dermstore.png"
import amaZon from "../../Assets/AmazonPrime.png"
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="Udemy Clone"
              description="Udemy is a massively-open online course (M.O.O.C.) website where anyone is free to create and promote courses in the style of traditional post-secondary education. Users can also take courses to earn credit towards technical certification.
              Tech Stack: Advance Javascript, HTML, CSS, Styled Components"
              link="https://verdant-kitten-680f9d.netlify.app/"
              Glink="https://github.com/rushig777/Udemy-clone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dermstore}
              isBlog={false}
              title="Dermstore Clone"
              description="Dermstore is a skin care and beauty e-commerce site in the United States. Since December 2020, it is a subsidiary of The Hut Group which is a British e-commerce company.
              Tech Stack: ReactJS, React-Router, React-Redux, React-Thunk, Javascript, Bootstrap, Material Ui, Styled Components, CSS"
              link="https://unit-4-dermstore-project.netlify.app/"
              Glink="https://github.com/Surya737673/DermStore"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amaZon}
              isBlog={false}
              title="Amazon Prime Clone"
              description="Amazon Prime is a paid subscription service from Amazon which is available in various countries and gives users access to additional services otherwise unavailable or available at a premium to other Amazon customers. Best Entertainment website, all in one.
              Tech Stack: HTML, CSS, JAVASCRIPT"
              link="https://nervous-sammet-6ff0d4.netlify.app/"
              Glink="https://github.com/huzaifa621/primeVideoProject"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Credit Card (React)"
              description=" A credit card is a payment card issued to users to enable the cardholder to pay a merchant for goods and services based on the cardholder's accrued debt."
              link="https://github.com/diksha020202/ReactCreditCard.git"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
