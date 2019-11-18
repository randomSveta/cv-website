import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export default function CodePenProject(props) {
    return (
        <div className="m-1 p-1">
            {props.project.jsx}
            <div className="bg-info p-2">
                <div className="cp-projects-links-bg p-2">
                    {props.project.taskLink ?
                        <a href={props.project.taskLink} target="_blank" rel="noopener noreferrer" className="link-style m-2 underscore text-decoration-none"><FontAwesomeIcon icon={faThumbtack} />  Task</a>
                        : null
                    }
                    <a href={props.project.projectLink} target="_blank" rel="noopener noreferrer" className="link-style m-2 underscore text-decoration-none"><FontAwesomeIcon icon={faExpand} />  Full page</a>
                </div>

            </div>
        </div>
    );
}


