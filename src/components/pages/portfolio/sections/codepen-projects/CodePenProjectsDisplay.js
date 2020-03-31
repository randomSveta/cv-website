import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CodePenProject from './CodePenProject';

import { CP_PROJECTS } from './cp-projects-list';
import { PAGES_TOTAL, PROJECTS_PER_PAGE } from './pagination/codepen-pages';

import CodePenProjectsPagination from './pagination/CodePenProjectsPagination';

export default function CodePenProjectsDisplay(props) {


    const [page, setPage] = useState(1);

    const penProjects = CP_PROJECTS.sort((a, b) => b.id - a.id).map(project => {
        return (
            <Col xs="12" lg="6" className="m-0 p-0" key={project.id}>
                <CodePenProject project={project} />
            </Col>
        );
    });

    function getProjectsForPage(page, projects, perPage) {
        let projectsToShow = "check types for: page, projects and perPage in CodePenProjectsDisplay.js line: 23";

        if (page > 0 && Number.isInteger(page) && projects.length > 0 && perPage > 0 && Number.isInteger(perPage)) {
            projectsToShow = projects.slice(perPage * (page - 1), perPage * page > projects.length ? projects.length : perPage * page)
        }
        return projectsToShow;
    }

    const CodePenProjects = getProjectsForPage(page, penProjects, PROJECTS_PER_PAGE);

    return (
        <Container>

            <CodePenProjectsPagination pagesTotal={PAGES_TOTAL} page={page} setPageNumber={setPage} />
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2  justify-content-center align-items-center flex-wrap">
                {CodePenProjects}
            </Row >
            <CodePenProjectsPagination pagesTotal={PAGES_TOTAL} page={page} setPageNumber={setPage} />
        </Container>

    )

}