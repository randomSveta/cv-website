import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Section(props) {

    const sectionId = props.section.name.toLowerCase().split(' ').join('-')

    return (
        <section id={sectionId} className={"m-0 p-0 container mw-100 " + (sectionId === "skills" ? "app-green-bg" : sectionId === "github" ? "app-parallax-bg" : "app-white-bg")
        } >
            <Row className={"m-0 p-0 justify-content-md-start align-items-center justify-content-center align-items-center " + (props.page !== "portfolio" ? "app-parallax-bg" : "app-green-bg")}>
                <Col md="3" xs="8" className="m-0 p-0">
                    <h2 className="app-h2 p-2 m-0 text-white d-flex text-md-left text-center flex-row justify-content-center align-items-center">
                        {props.section.name}
                    </h2>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col xs="12" className="m-0 p-0">
                    {props.section.jsx}
                </Col>
            </Row>
        </ section >);

}