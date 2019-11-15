import React from 'react';
import Section from '../Section';
import { SECTIONS_HOME } from '../../navigation/pages-and-sections/sections';
import { Row, Col } from 'reactstrap';

export default function Home(props) {


    const sectionsDisplay = SECTIONS_HOME.map(section => {

        return (
            <Section key={section.id} section={section} class={section.name.split(' ').join('-').toLowerCase() + '-parallax'} content={section.jsx} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (

        <Row className="justify-content-center align-items-center m-0 p-0">
            <Col xs='12' className="m-0 p-0">
                {sectionsDisplay}
            </Col>
        </Row>

    );
}