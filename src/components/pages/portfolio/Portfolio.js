import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { SECTIONS_PORTFOLIO } from '../../navigation/pages-and-sections/sections'
import Section from '../Section';


export default function Portfolio(props) {

    const codePenSectionDisplay = SECTIONS_PORTFOLIO.map(section => {
        return (
            <Section key={section.id} content={section.jsx} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (
        <Container id="portfolio">
            <Row className="m-0 p-0 justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    <h1 className="text-white">Portfolio</h1>
                </Col>
            </Row>
            <Row className="m-0 p-0 justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    {codePenSectionDisplay}
                </Col>
            </Row>
        </Container>
    );
}