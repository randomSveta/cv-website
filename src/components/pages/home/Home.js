import React from 'react';

import Section from '../Section';
import { HASH_HOME } from '../../navigation/links/nav-links';
import { Row, Col } from 'reactstrap';

export default function Home(props) {
 

    const sectionsDisplay = HASH_HOME.map(section => {

        return (
            <Section key={section.id} content={section.jsx} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (


        <Row className="container-row-col">
            <Col xs='12'>
                {sectionsDisplay}
            </Col>
        </Row>
    );
}