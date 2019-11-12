import React from 'react';
import { CURRENT_PROJECTS } from './current-projects-list';
import { Col, Row } from 'reactstrap'
import CurrentProject from './CurrentProject';

export default function CurrentProjectsDisplay(props) {

  const currentProjects = CURRENT_PROJECTS.map(project => {
    return (
      <CurrentProject key={project.id} project={project} />
    );
  });
  return (
    <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
      <Col xs="12">
        {currentProjects}
      </Col>
    </Row>
  );
}

