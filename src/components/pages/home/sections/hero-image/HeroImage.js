import React from 'react';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import SocialIconsLayout from '../../../../shared/social-icons/SocialIconsLayout';

import "../../../../../styles/css/hero-image.css"

export default function HeroImage(props) {
  return (
    <Jumbotron id="hero-image" className="m-0 p-0 d-flex flex-column align-items-center justify-content-center text-center text-white">
      <Container>
        <Row className="m-0 p-0">
          <Col xs="12" className="m-0 p-0">
            <h1>Hi, my name is Sveta!</h1>
            <p>I am Web Developer</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <SocialIconsLayout place="hero" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

