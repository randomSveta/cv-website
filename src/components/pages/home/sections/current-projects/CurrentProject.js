import React from 'react';
import { Media } from 'reactstrap';
import { Progress } from 'reactstrap'

export default function CurrentProject(props) {

    return (
        <Media className="mr-3 my-3 py-2 pr-3 border" key={props.project.id}>
            <Media left middle href={props.project.taskLink} className="mx-2 p-2">
                <Media object src={props.project.imgPath} alt={props.project.alt} className="media-img" />
            </Media>
            <Media body>
                <Media heading>
                    <a href={props.project.projectLink}>{props.project.title}</a>
                </Media>
                {props.project.description}
                <p className="mt-2">Progress:</p>
                <Progress value={props.project.progress} className="my-3" color="dark">{props.project.progress}%</Progress>
            </Media>
        </Media>
    );
}

