import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faThumbtack, faCalendarAlt, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

export default function CodePenProject(props) {
    return (
        <div className="m-1 p-1">
            {props.project.jsx}
            <div className="bg-info p-2">
                <div className="app-dark-bg p-2 text-center">
                    {props.project.taskLink ?
                        <a href={props.project.taskLink} target="_blank" rel="noopener noreferrer" className="app-link m-2 app-link-underscore text-decoration-none"><FontAwesomeIcon icon={faThumbtack} />  Task</a>
                        : null
                    }
                    <a href={props.project.projectLink} target="_blank" rel="noopener noreferrer" className="app-link m-2 app-link-underscore text-decoration-none"><FontAwesomeIcon icon={faExpand} />  Full page</a>
                    <span className="text-white m-2"><FontAwesomeIcon icon={faCalendarAlt} /> {props.project.year}</span>
                    <span className="text-white m-2" hidden={props.project.ifFinished ? true : false}><FontAwesomeIcon icon={faHourglassHalf} /></span>
                </div>

            </div>
        </div>
    );
}


