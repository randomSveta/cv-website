import React from 'react';

import About from './sections/about/About';
import CurrentProjects from './sections/current-projects/CurrentProjects';
import Skills from './sections/skills/Skills';
import { Row, Col } from 'reactstrap';

const components = [<About />, <Skills />, <CurrentProjects />];

export default function Home(props) {

    const showSection = components.map(component => {
        return (
            <React.Fragment>
                <Row className="container-row-col">
                    <Col xs="12" className="container-row-col">
                        {component}
                    </Col>
                </Row>
            </React.Fragment>

        );
    });

    return (

        <React.Fragment>
            <Row id="home-sections" className="container-row-col">
                <Col xs="12" className="container-row-col">
                    {showSection}
                </Col>
            </Row>
        </React.Fragment>

    );
}


