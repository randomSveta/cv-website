import React from 'react';
import { Row, Col } from 'reactstrap';
import ParallaxBackground from '../ParallaxBackground';

export default function Section(props) {

    if (props.sectionId === "skills" || props.sectionId === "current-projects") {
        return (
            <section id={props.sectionId} className="m-0 p-0">
                <h2 className="text-center p-3 m-0 bg-secondary text-white">{props.name}</h2>
                <ParallaxBackground classProp="parallax-home mb-3" />
                <Row className="m-0 p-0">
                    <Col xs="12" className="m-0 p-0">
                        {props.content}
                    </Col>
                </Row>
            </section>);
    }
    else {
        return (
            <section id={props.sectionId} className="m-0 p-0">
                <h2 className="text-center p-3 m-0 bg-secondary text-white">{props.name}</h2>
                {props.content}
            </section>

        );
    }

}