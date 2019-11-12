import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillIcon(props) {
    return (
        <div className="m-3 p-3 border skills-icon-item text-center">
            <FontAwesomeIcon icon={props.icon} />
            <p className="m-0 p-0">{props.name}</p>
        </div>

    );
}