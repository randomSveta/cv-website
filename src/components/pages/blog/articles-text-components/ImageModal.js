import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ImageModal(props) {
  return (
      <Modal isOpen={props.modal} toggle={props.toggle} id={props.id} size="lg">
<ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.img}
        </ModalBody>
      </Modal>
  );
}

