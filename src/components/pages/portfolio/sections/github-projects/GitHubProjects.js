import React from 'react';
import { GH_PROJECTS } from '../../../../website-data/portfolio/github-projects';
import { Row, CardColumns, Container } from 'reactstrap';
import GitHubProjectCard from './GitHubProjectCard';


export default function Statistics(props) {

    const ghProjects = GH_PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        return (
            <GitHubProjectCard project={project} key={project.id} />
        );
    });

    return (
        <Container>
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2 justify-content-center align-items-center">
                <CardColumns className="m-0 p-0">
                    {ghProjects}
                </CardColumns>
            </Row>
        </Container>

    )

}


