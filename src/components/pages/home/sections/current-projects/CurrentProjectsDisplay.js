import React from 'react';
import { CURRENT_PROJECTS } from '../../../../website-data/home/current-projects-list';
import { CardColumns, Row } from 'reactstrap'
import CurrentProject from './CurrentProject';

export default function CurrentProjectsDisplay(props) {

  const currentProjects = CURRENT_PROJECTS.map(project => {
    return (
      <CurrentProject key={project.id} project={project} />
    );
  });
  return (
    <Row className="m-5 p-0 justify-content-center align-items-center">
      <CardColumns xs="12">
        {currentProjects}
      </CardColumns>
    </Row>
  );
}

