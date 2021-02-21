import React from 'react';
import { Card, CardLink, CardText, CardFooter, CardBody, CardHeader, CardImg } from 'reactstrap';

export default function GitHubProjectCard(props) {
  return (
    <Card className='rounded-0 border border-dark'>
      <CardHeader className='text-center rounded-0 text-white'>
        <b>{props.project.name}</b>
      </CardHeader>
      {props.project.image.default ? (
        <a href={props.project.projectLink} target='_blank' rel='noopener noreferrer'>
          <CardImg className='card-image' top src={props.project.image.default} alt='Project image' />
        </a>
      ) : (
        ''
      )}
      <CardBody>
        <CardText>{props.project.description}</CardText>
      </CardBody>
      <CardFooter className='text-center rounded-0'>
        {props.project.taskLink ? (
          <CardLink href={props.project.taskLink} target='_blank' className='app-link app-link-underscore'>
            Task
          </CardLink>
        ) : null}
        {props.project.repoLink ? (
          <CardLink href={props.project.repoLink} target='_blank' className='app-link app-link-underscore'>
            Repository
          </CardLink>
        ) : null}
        {props.project.projectLink ? (
          <CardLink href={props.project.projectLink} target='_blank' className='app-link app-link-underscore'>
            Deploy
          </CardLink>
        ) : null}
      </CardFooter>
    </Card>
  );
}
