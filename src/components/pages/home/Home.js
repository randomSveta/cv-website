import React from 'react';

import About from './sections/about/About';
import CurrentProjects from './sections/current-projects/CurrentProjects';
import Skills from './sections/skills/Skills';
import { Row, Col } from 'reactstrap';

export default function Home(props) {

   

    return (

        <Row>
            <Col xs="12">
                <Row>
                    <Col xs="12" >
                       
                        <Row  id="home-sections">
                            <Row>
                                <Col xs="12">
                                    <About />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Skills />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <CurrentProjects />
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
               
            </Col>
        </Row>

    );
}


