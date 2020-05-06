import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { SECTIONS_PORTFOLIO } from '../../website-data/pages-and-sections/sections'
import Section from '../Section';

import "../../../styles/css/portfolio.css"


export default function Portfolio(props) {



    const codePenSectionDisplay = SECTIONS_PORTFOLIO.map(section => {

        const createdParallaxClass = section.name.split(' ').join('-').toLowerCase() + '-parallax';
        const createdSectionId = section.hashUrl.split('').splice(1).join('');

        return (
            <Section key={section.id} section={section} class={createdParallaxClass} content={section.jsx} name={section.name} sectionId={createdSectionId} />
        );
    });

    return (
        <Container id="portfolio" className="mw-100 m-0 px-4 py-0">
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