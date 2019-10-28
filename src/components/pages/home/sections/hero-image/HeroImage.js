import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import SocialIconsDisplay from '../../../../social-icons/SocialIconsDisplay';

export default function HeroImage(props) {
  return (
    <React.Fragment>
      <Jumbotron id="hero-image">
        <Row>
          <Col xs="12">
            <h1 id="hero-h1">Hi, my name is Sveta!</h1>
            <p id="hero-p">I am Web Developer</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <SocialIconsDisplay place="hero-social"/>
          </Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
};

