import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { ABOUT_TEXT_BLOCKS } from './about-text-list';
import AboutText from './AboutText';

export default function AboutTextsDisplay(props) {
    const textDisplay = ABOUT_TEXT_BLOCKS.map(text => {
        return (
            <Col xs="12" md="4" className='m-0 p-0' key={text.id}>
                   <AboutText text={text}/>
            </Col>
        );
    });

    return (
        <Container>
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2 justify-content-center align-items-start">
                {textDisplay}
            </Row>
        </Container>

    );
}