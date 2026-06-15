import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Access bite-sized courses, interactive content, and practical knowledge that help you learn faster and achieve your goals sooner!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Our dedicated support team is available around the clock to help you with courses, technical issues, and learning guidance whenever you need it!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Complete your courses and receive certificates that showcase your skills, enhance your resume, and boost your career opportunities!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
