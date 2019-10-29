import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Section(props) {
    return (
        <React.Fragment>
            <section id={props.sectionId} className="section">
                <Row className="section-container">
                    <Col xs="12" className="section-container">
                        <Row>
                            <Col xs="12">
                                <h2>{props.name}</h2>
                            </Col>
                        </Row>
                        <Row className="section-content">
                            <Col xs="12">
                                {props.content}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </React.Fragment>

    );
}