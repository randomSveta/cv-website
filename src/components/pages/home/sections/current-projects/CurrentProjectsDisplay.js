import React from 'react';
import { CURRENT_PROJECTS } from './current-projects-list';
import { CardColumns, Row, Container } from 'reactstrap'
import CurrentProject from './CurrentProject';

export default function CurrentProjectsDisplay(props) {

  const currentProjects = CURRENT_PROJECTS.map(project => {
    return (
      <CurrentProject key={project.id} project={project}/>
    );
  });
  return (
    <Container>
      <Row className="m-5 p-0 justify-content-center align-items-center">
        <CardColumns xs="12">
          {currentProjects}
        </CardColumns>
      </Row>
    </Container>
  );
}

