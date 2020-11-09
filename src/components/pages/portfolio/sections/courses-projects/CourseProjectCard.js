import React from 'react';
import {
    Card,
    CardLink,
    CardText,
    CardFooter,
    CardBody,
    CardHeader,
    CardImg
} from 'reactstrap';

export default function CourseProjectCard(props) {

    return (
        <Card className="rounded-0">
            <CardHeader className="text-center rounded-0 text-white"><CardLink className="app-link app-link-underscore" href={props.project.courseLink} target="_blank" rel="noopener noreferrer"><b>{props.project.courseName}</b></CardLink><br />{props.project.projectName}</CardHeader>
            { props.project.image ? <a href={props.project.projectLink} target="_blank" rel="noopener noreferrer"><CardImg className="card-image rounded-0" top src={props.project.image} alt="Project image" /></a> : ""}
            <CardBody>
                <CardText>{props.project.description}</CardText>
            </CardBody>
            <CardFooter className="text-center rounded-0">
                {props.project.taskLink ?
                    <CardLink href={props.project.taskLink} target="_blank" className="app-link app-link-underscore">Task</CardLink>
                    : null
                }
                {props.project.repoLink ?
                    <CardLink href={props.project.repoLink} target="_blank" className="app-link app-link-underscore">Repository</CardLink>
                    : null
                }
                {props.project.projectLink ?
                    <CardLink href={props.project.projectLink} target="_blank" className="app-link app-link-underscore">Deploy</CardLink>
                    : null}
            </CardFooter>
        </Card >
    );
}