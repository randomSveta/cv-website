import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutText(props) {

    return (
        <div className="m-0 py-0 px-2">
            <div className="app-icon mx-auto text-center rounded-circle d-flex flex-row justify-content-center align-items-center app-green-bg">
                <FontAwesomeIcon icon={props.text.icon} aria-hidden="true" />
            </div>
            <p className="my-4 mx-2 py-3 px-1">
                {props.text.text}
            </p>
        </div>
    );

}