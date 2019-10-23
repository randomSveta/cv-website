import React from 'react';
import {Row, Col} from 'reactstrap';

export default function Section(props) {
    return (
        <section id={props.sectionId} className="section">
            <Row>
                <Col xs="12">
                <h2>{props.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                {props.content}
                </Col>
            </Row>
        </section>
    );
}