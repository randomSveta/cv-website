import React from 'react';
import { GH_PROJECTS } from './gh-projects-list';
import { Row, CardColumns } from 'reactstrap';
import GitHubProject from './GitHubProject';

export default function GitHubProjectsDisplay(props) {

    const penProjects = GH_PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        return (
            <GitHubProject project={project} key={project.id} />
        );
    });

    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            <CardColumns className="m-3 p-3">
                {penProjects}
            </CardColumns>
        </Row>

    )

}