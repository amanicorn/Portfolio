import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone! I’m <span className="purple">Aman Kumar</span> from{" "}
          <span className="purple">Bihar, India</span>.
          <br />
          I’m a <span className="purple">third-year B.Tech student</span> in{" "}
          <span className="purple">Information Technology</span> at{" "}
          <span className="purple">Heritage Institute of Technology</span>.
          <br />
          I have a strong focus on{" "}
          <span className="purple">
            Data Structures, Algorithms, and Full-Stack Development
          </span>, and I enjoy building efficient and scalable applications.
          <br />
          <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I enjoy solving problems today that my past self thought were impossible."
          </p>
          <footer className="blockquote-footer">Aman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
