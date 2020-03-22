import React from 'react';
import { CP_PROJECTS } from './cp-projects-list';
import { Row, Col, Container } from 'reactstrap';
import CodePenProject from './CodePenProject';
//import Pagination from 'react-router-pagination';
import PaginationComponent from './PaginationComponent';


export default function CodePenProjectsDisplay(props) {

    const penProjects = CP_PROJECTS.sort((a, b) => b.id - a.id).map(project => {
        return (
            <Col xs="12" lg="6" className="m-0 p-0" key={project.id}>
                <CodePenProject project={project} />
            </Col>
        );
    });

    return (
        <Container>
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2  justify-content-center align-items-center flex-wrap">
                {penProjects}
            </Row >
            <Row>
                <Col xs={12}>
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>

    )

}