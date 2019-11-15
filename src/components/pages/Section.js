import React from 'react';
import { Row, Col } from 'reactstrap';
import ParallaxBackground from '../ParallaxBackground';

export default function Section(props) {

        return (
            <section id={props.sectionId} className="m-0 p-0">
                <h2 className="text-center p-3 m-0 text-dark">{props.name}</h2>
                {(props.sectionId === "skills" || props.sectionId === "current-projects")?
            <React.Fragment>
                <ParallaxBackground classProp={'mb-3 '.concat(props.class)} />
                <Row className="m-0 p-0">
                    <Col xs="12" className="m-0 p-0">
                        {props.content}
                    </Col>
                </Row>
            </React.Fragment>:
            <React.Fragment>
                {props.content}
            </React.Fragment>

            }
                
            </section>);

}