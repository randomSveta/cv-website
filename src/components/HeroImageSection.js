import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import SocialIcon from './SocialIcon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon>
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon>
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon>
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon>
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon>
            <SocialIcon icon={faCoffee} class="social-icon"><a href="#"></a></SocialIcon></Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
};

