import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Credexa"
              description="A full-stack web application that aggregates and verifies user credentials into a unified profile. Built with Next.js, Node.js, and MongoDB, it uses AI for certificate parsing, fraud detection, and personalized career recommendations, along with blockchain-based verification for enhanced trust and security."
              ghLink="https://github.com/Aditya-KumarJha/Credexa"
              demoLink="https://credexa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FoodShare"
              description="A full-stack web application that connects surplus food providers with recipients to reduce waste and improve distribution. Built with Next.js, Node.js, and MongoDB, it allows users to list excess food, receive real-time notifications, and coordinate pickups. It also includes role-based access, food safety tracking, and an analytics dashboard to monitor impact."
              ghLink="https://github.com/sumit010804/food-share"
              demoLink="https://foodshare-black.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
