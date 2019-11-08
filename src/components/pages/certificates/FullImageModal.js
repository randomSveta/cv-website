import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function ModalExample(props) {


    return (
        <Modal size="lg" isOpen={props.open} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            <ModalBody>
                <img width="100%" src={props.image} alt={props.title} />
            </ModalBody>
        </Modal>
    );
}