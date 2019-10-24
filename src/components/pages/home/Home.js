import React from 'react';
import HeroImage from './sections/hero-image/HeroImage';
import NavBar from '../../navigation/NavBar';
import About from './sections/about/About';
import CurrentProjects from './sections/current-projects/CurrentProjects';
import Skills from './sections/skills/Skills';

import Footer from '../../Footer';
import NavBarAchievments from '../../navigation/NavBarAchievments';
import NavBarHomeHash from '../../navigation/NevBarHomeHash';

import { Row, Col } from 'reactstrap';

export default function Home(props) {

    const achievments = <NavBarAchievments />;
    const hashLinks = <NavBarHomeHash />;
    return (

        <Row>
            <Col xs="12">
                <Row>
                    <Col xs="12" >
                        <Row className="hero-row">
                            <Col xs="12" className="hero-col">
                                <HeroImage />
                            </Col>
                        </Row>
                        <NavBar navigationAchievments={achievments} navigationHash={hashLinks} />
                        <Row>
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
                <Row>
                    <Col xs="12">
                        <Footer />
                    </Col>
                </Row>
            </Col>
        </Row>

    );
}


