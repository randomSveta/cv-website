import React from 'react';
import { CP_PROJECTS } from './cp-projects-list';
import { Row, Col } from 'reactstrap';
import CodePenProject from './CodePenProject';

export default function CodePenProjectsDisplay(props) {

    const penProjects = CP_PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        return (
            <Col xs="12" lg="6" className="m-0 p-0" key={project.id}>
                <CodePenProject project={project.jsx} projectLink={project.link} />
            </Col>
        );
    });

    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {penProjects}
        </Row>

    )

}