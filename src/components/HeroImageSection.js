import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HeroImage = (props) => {
  return (
    <React.Fragment>
      <Jumbotron className="hero-image">
        <h1>Hi, my name is Sveta!</h1>
        <p>I am Web Developer</p>
          <Button color="primary">Find out more</Button>
      </Jumbotron>
    </React.Fragment>
  );
};

export default HeroImage;
