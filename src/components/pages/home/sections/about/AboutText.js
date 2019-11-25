import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutTextsDisplay(props) {
   
        return (
                <div className="m-0 py-0 px-2">
                    <div className="about-icon mx-auto text-center rounded-circle d-flex flex-row justify-content-center align-items-center">
                        <FontAwesomeIcon icon={props.text.icon} aria-hidden="true"/>
                    </div>
                    <p className='about-text m-2 p-1'>
                        {props.text.text}
                    </p>
                </div>
        );

}