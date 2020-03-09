import React from 'react';
import Section from '../Section';
import { SECTIONS_HOME } from '../../navigation/pages-and-sections/sections';
import { Row, Col, Container } from 'reactstrap';

import "./home.css";

export default function Home(props) {

    const sectionsDisplay = SECTIONS_HOME.map(section => {

        const createdParallaxClass = section.name.split(' ').join('-').toLowerCase() + '-parallax';
        const createdSectionId = section.hashUrl.split('').splice(1).join('');

        return (
            <Section key={section.id} section={section} class={createdParallaxClass} content={section.jsx} name={section.name} sectionId={createdSectionId} />
        );
    });

    return (
        <Container id="home" className="mw-100 m-0 px-4 py-0">
            <Row className="justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    {sectionsDisplay}
                </Col>
            </Row>
        </Container>
    );
}