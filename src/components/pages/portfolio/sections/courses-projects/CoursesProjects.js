import React from 'react';
import { COURSES_PROJECTS } from '../../../../website-data/portfolio/courses-projects';
import { Row, CardColumns, Container } from 'reactstrap';
import CourseProjectCard from './CourseProjectCard';


export default function CoursesProjects(props) {

    const coursesProjects = COURSES_PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        return (
            <CourseProjectCard project={project} key={project.id} />
        );
    });

    return (
        <Container>
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2 justify-content-center align-items-center">
                <CardColumns className="m-0 p-0">
                    {coursesProjects}
                </CardColumns>
            </Row>
        </Container>

    )

}


