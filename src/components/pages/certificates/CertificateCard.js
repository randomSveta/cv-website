import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CertificateCard(props) {
   
 const IMAGE_PATH = props.imgPath;

  return (
    <div>
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
      </CardBody>
      <CardImg width="100%" src={IMAGE_PATH} alt="Card image cap" />
      <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardLink href="#">Card Link</CardLink>
      </CardBody>
    </Card>
  </div>
  );
};
