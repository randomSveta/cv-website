import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function ImageModal(props) {

  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
      <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
      <ModalBody>
        <img width="100%" src={props.img} alt={props.title} />
      </ModalBody>
    </Modal>
  );
}
