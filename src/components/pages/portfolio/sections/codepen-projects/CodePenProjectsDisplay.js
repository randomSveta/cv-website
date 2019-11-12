import React from 'react';
import { PROJECTS } from './cp-projects-list';
import { Row, Col } from 'reactstrap';

export default function CodePenDisplay(props) {

    const penProjects = PROJECTS.filter(project => project.section === props.section).sort((a, b) => b.year - a.year).map(project => {
        return (
            <Col xs="12" lg="6" className="m-0 p-0" key={project.id}>
                <div className="m-3 p-3">
                    {project.jsx}
                    <p>Open the <a href={project.link} target="_blank" rel="noopener noreferrer">full page </a></p>
                </div>
            </Col>
        );
    });

    return (

        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {penProjects}
        </Row>

    )

}