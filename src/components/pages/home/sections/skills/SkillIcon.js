import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillIcon(props) {
    return (
        <div className="my-3 mx-auto p-3 d-flex flex-column align-items-center justify-content-center rounded-circle skills-icon-item text-center">
            <FontAwesomeIcon icon={props.icon} />
            <p className="m-0 p-0">{props.name}</p>
        </div>

    );
}