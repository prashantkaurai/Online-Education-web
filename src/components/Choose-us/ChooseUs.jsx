import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Access high-quality courses from any device, at any time. Whether you're at home, at work, 
                or on the go, learning is always within reach.
                Access high-quality courses from any device, at any time. Whether you're at home, at work, or on the go, learning is always within reach.
                Engage with quizzes, assignments, live sessions, and hands-on projects that help you understand concepts more effectively.
                Get assistance whenever you need it through our dedicated support team, ensuring a smooth and productive learning journey.
                Earn recognized certificates upon course completion to showcase your skills and strengthen your professional profile.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer url="https://www.youtube.com/watch?v=qFp27TR4Yew" controls width="100%" height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i class="ri-play-circle-line" onClick={() => setShowVideo(!showVideo)} ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
