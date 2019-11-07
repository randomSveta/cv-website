import React from 'react';
import { Media } from 'reactstrap';
import { CURRENT_PROJECTS } from './current-projects-list';
import { Col, Row, Progress } from 'reactstrap'

export default function CurrentProjectsDisplay(props) {

  const currentProjects = CURRENT_PROJECTS.map(project => {
    return (
      <React.Fragment key={project.id}>
        <Media className="mr-3 my-3 py-2 pr-3 border">
          <Media left middle href={project.taskLink} className="mx-2 p-2">
            <Media object src={project.imgPath} alt={project.alt} className="media-img" />
          </Media>
          <Media body>
            <Media heading>
              <a href={project.projectLink}>{project.title}</a>
            </Media>
            {project.description}
            <p className="mt-2">Progress:</p>
            <Progress value={project.progress} className="my-3" color="dark">{project.progress}%</Progress>
          </Media>
        </Media>

      </React.Fragment>
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

