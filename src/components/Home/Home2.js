import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineering student with a strong passion for
              problem-solving and building efficient, scalable applications.
              Over time, I’ve focused on mastering data structures and
              algorithms while also exploring development to turn ideas into
              real-world solutions.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C++, Java, and JavaScript{" "}
                </b>
              </i>
              and I work across both frontend and backend using
              <i>
                <b className="purple">
                  {" "}
                  Node.js and Express{" "}
                </b>
              </i>
              along with modern frontend technologies.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Development, Competitive Programming,{" "}
                </b>
              </i>
              and building impactful, user-friendly applications.
              <br />
              <br />
              Whenever possible, I enjoy working on projects that challenge my
              logic and help me grow as a developer, especially using{" "}
              <b className="purple">React.js</b> and modern tools.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;