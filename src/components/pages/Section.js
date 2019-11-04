import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Section(props) {
    return (
            <section id={props.sectionId} className="m-0 p-0">
                <h2 className="text-center">{props.name}</h2>
                        <Row className="m-0 p-3">
                            <Col xs="12" className="m-0 p-3">
                                {props.content}
                            </Col>
                        </Row>
            </section>

    );
}