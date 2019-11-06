import React from 'react';
import { Media } from 'reactstrap';
import { CURRENT_PROJECTS } from './current-projects-list';
import { Col, Row, Progress } from 'reactstrap'

export default function CurrentProjectsDisplay(props) {

  const currentProjects = CURRENT_PROJECTS.map(project => {
    return (
      <React.Fragment key={project.id}>
        <Media className="m-4 p-4">
          <Media left middle href={project.taskLink}>
            <Media object src={project.imgPath} alt={project.alt} className="media-img"/>
          </Media>
          <Media body>
            <Media heading>
              {project.title}
            </Media>
            {project.description}
            <a href={project.projectLink}>Have a look at the project!</a>
          </Media>
        </Media>
        <Progress value={project.progress} className="mr-5 ml-5 mt-2 mb-2">{project.progress}%</Progress>
      </React.Fragment>

    );
  });
  return (
    <Row className="m-0 p-0 justify-content-center">
      <Col>
        {currentProjects}
      </Col>
    </Row>
  );
}

