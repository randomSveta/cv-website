import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Statistica(props) {

    return (
        <div className="mx-auto rounded-circle statistica text-white d-flex flex-column justify-content-center align-items-center flex-wrap">
            <a href={props.stat.url} target="_blank" rel="noopener noreferrer" className="link-style underscore-sections"><FontAwesomeIcon icon={props.stat.icon} className="rotate-animation"/></a>
            <p className="stat-name m-0 p-1">{props.stat.profile}</p>
            <p className="stat-points m-0 p-1">{props.stat.points}</p>
            <p className="stat-name m-0 p-1">points</p>
        </div>
    );
}


