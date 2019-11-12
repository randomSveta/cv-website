import React from 'react';
import { Card, CardLink, CardTitle, CardText } from 'reactstrap';

export default function GitHubProject(props) {

    return (
        <Card body>
            <CardTitle>{props.project.name}</CardTitle>
            <CardText>{props.project.description}</CardText>
            <CardLink href={props.project.linkRepo} target="_blank">Repository</CardLink>
            <CardLink href={props.project.linkPages} target="_blank">Pages</CardLink>
        </Card>
    );
}