import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CertificateCard(props) {

  const IMAGE_PATH = props.imgPath;

  return (
    <React.Fragment>
      <Card className="card-container">
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.organization + ' ' + props.year}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={IMAGE_PATH} alt={props.name} />
        <CardBody>
          <CardText>{props.description}</CardText>
          <CardLink href={props.link} target='_blank'>check certificate</CardLink>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
