import React from 'react';
import { PROJECTS } from './projects-list';
import { Row, Col } from 'reactstrap';

export default function ProjectsDisplay(props) {

    const penProjects = PROJECTS.filter(project => project.section === props.section).sort((a, b) => b.year - a.year).map(project => {
        return (
            <Col xs="12" sm="6" key={project.id}>
                {project.jsx}
                <p>Open a <a href={project.link} target="_blank" rel="noopener noreferrer">full page </a></p>
            </Col>
        );
    });

    return (

        <React.Fragment>
            <Row>
                {penProjects}
            </Row>
        </React.Fragment>




    )

}