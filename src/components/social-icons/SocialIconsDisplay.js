import React from 'react';
import SocialIcon from './SocialIcon';
import {SOCIAL_LINKS} from './links/social-links';



export default function SocialIconsDisplay(props) {
    let icons = SOCIAL_LINKS.map(link => {
        return (

            <li key={link.id.toString()} className='social-icon-item underscore m-3'>
                <a href={link.url} className='rotate-animation'>
                    <SocialIcon icon={link.icon} />
                </a>
            </li>

        );
    });
    return (
        <React.Fragment>
            <ul className='d-flex flex-direction-row justify-content-center align-items-center m-0 p-0' id={props.place}>
                {icons}
            </ul>
        </React.Fragment>

    );

}
