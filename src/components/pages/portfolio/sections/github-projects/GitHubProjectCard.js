import React from 'react';
import {
    Card,
    CardLink,
    CardText,
    CardFooter,
    CardBody,
    CardHeader
} from 'reactstrap';

export default function GitHubProjectCard(props) {

    return (
        <Card className="gh-project rounded-0">
            <CardHeader className="text-center gh-card-bg rounded-0 text-white">{props.project.name}</CardHeader>
            <CardBody>
                <CardText>{props.project.description}</CardText>
            </CardBody>
            <CardFooter className="text-center gh-card-bg rounded-0">
                {props.project.taskLink ?
                    <CardLink href={props.project.taskLink} target="_blank" className="link-style underscore">Task</CardLink>
                    : null
                }
                {props.project.repoLink ?
                    <CardLink href={props.project.repoLink} target="_blank" className="link-style underscore">Repository</CardLink>
                    : null
                }
                {props.project.projectLink ?
                    <CardLink href={props.project.projectLink} target="_blank" className="link-style underscore">Pages</CardLink>
                    : null}
            </CardFooter>
        </Card>
    );
}