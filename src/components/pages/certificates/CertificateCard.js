import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import FullImageModal from './FullImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CertificateCard(props) {

  const [modal, setModal] = useState(false);

  const {
    className
  } = props;

  const toggle = () => setModal(!modal);

  const IMAGE_PATH = props.imgPath;
  let certificateCheck;

  if(props.link) {
     certificateCheck = <CardLink href={props.link}  className="border border-secondary p-1" target='_blank'><FontAwesomeIcon icon={faCheck}/> check the certificate</CardLink>
  }

  return (
      <Card className="card-container bg-light">
        <CardBody>
          <CardTitle className="font-weight-bold">{props.name}</CardTitle>
          <CardSubtitle className="text-center">{props.organization + ' ' + props.year}</CardSubtitle>
        </CardBody>
        <CardImg className="w-100 certificate-img"src={IMAGE_PATH} alt={props.name} onClick={toggle}/>
        <FullImageModal open={modal} toggle={toggle} className={className} title={props.name} image={IMAGE_PATH}/>
        <CardBody>
          <CardText>{props.description}</CardText>
          {certificateCheck}
        </CardBody>
      </Card>
  );
};
