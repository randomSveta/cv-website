import React from 'react';
import Section from './Section';
import { Row, Col, Container } from 'reactstrap';

export default function Home(props) {

    const sections = props.sections.map(section => {

        return (
            <Section key={section.id} section={section} page={props.page} />
        );
    });

    return (
        <Container id={props.page} className="mw-100 m-0 px-4 py-0">
            <Row className="justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    {sections}
                </Col>
            </Row>
        </Container>
    );
}