import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Section(props) {

    return (
        <section id={props.sectionId} className="m-0 p-0 container mw-100 bg-light">
            <Row className="m-0 p-0  h2-row justify-content-md-start align-items-center justify-content-center align-items-center">
                <Col md="3" xs="8" className="m-0 p-0">
                    <h2 className="p-2 m-0  text-white d-flex text-md-left text-center  flex-row justify-content-center align-items-center">{props.name}
                    </h2>
                </Col>
            </Row>
            <Row className="m-0 p-0 blue-bg-section">
                <Col xs="12" className="m-0 p-0">
                    {props.content}
                </Col>
            </Row>
        </section>);

}