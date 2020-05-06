import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Section from '../Section';
import { SECTIONS_PROJECTS_HISTORY } from '../../website-data/pages-and-sections/sections';

import "../../../styles/css/projects-history.css";

export default function ProjectsHistory(props) {

    const sectionsDisplay = SECTIONS_PROJECTS_HISTORY.map(section => {

        const createdParallaxClass = section.name.split(' ').join('-').toLowerCase() + '-parallax';
        const createdSectionId = section.hashUrl.split('').splice(1).join('');

        return (
            <Section key={section.id} section={section} class={createdParallaxClass} content={section.jsx} name={section.name} sectionId={createdSectionId} />
        );
    });


    return (
        <Container id="projects-history" className="mw-100 m-0 px-4 py-0">
            <Row className="justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    {sectionsDisplay}
                </Col>
            </Row>
        </Container>
    );
}