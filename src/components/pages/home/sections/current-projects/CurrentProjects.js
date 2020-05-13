import React from 'react';
import { CardColumns, Col, Row, Container } from 'reactstrap'
import { CURRENT_PROJECTS } from '../../../../website-data/home/current-projects';
import CurrentProjectCard from './CurrentProjectCard';
import ProjectsHistoryLink from '../../../projects-history/ProjectsHistoryLink';

export default function CurrentProjects(props) {
    const currentProjects = CURRENT_PROJECTS.map(project => {
        return (
            <CurrentProjectCard key={project.id} project={project} />
        );
    });

    return (
        <React.Fragment>
            <Container>
                <Row className="m-5 p-0 justify-content-center align-items-center">
                    <CardColumns xs="12">
                        {currentProjects}
                    </CardColumns>
                </Row>
                <Row className="m-5 p-0 justify-content-center align-items-center">
                    <Col xs="12" className="text-center">
                        <ProjectsHistoryLink />
                    </Col>
                </Row>
            </Container>

        </React.Fragment>);
}


