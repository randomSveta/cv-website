import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import SocialIconsDisplay from './SocialIconsDisplay';

export default function HeroImage(props) {
  return (
    <React.Fragment>
      <Jumbotron className="hero-image">
        <Row>
          <Col xs="12">
            <h1>Hi, my name is Sveta!</h1>
            <p>I am Web Developer</p>
          </Col>
        </Row>
        <Col xs="12">
          <Button color="primary">Find out more</Button>
        </Col>
        <Row>
          <Col xs="12">
            <SocialIconsDisplay />
          </Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
};

