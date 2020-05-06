import React from 'react';
import CurrentProjectsDisplay from './CurrentProjectsDisplay';
import { Col, Row, Container } from 'reactstrap'
import { Link } from 'react-router-dom';

import "../../../../../styles/css/current-projects.css";

export default function CurrentProjects(props) {
    return (
        <React.Fragment>
            <Container>
                <CurrentProjectsDisplay />
                <Row className="m-5 p-0 justify-content-center align-items-center">
                    <Col xs="12" className="text-center">
                        <Link to={"/projects-history"} className="underscore text-decoration-none text-dark">Projects History</Link>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>);
}


