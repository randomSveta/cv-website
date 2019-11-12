import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

export default function CodePenProject(props) {
    return (
        <div className="m-3 p-3">
            {props.project}
            <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className="border"><FontAwesomeIcon icon={faExpand} /> full page</a>
        </div>
    );
}


