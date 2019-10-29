import React from 'react';
import SocialIcon from './SocialIcon';
import {SOCIAL_LINKS} from './links/social-links';



export default function SocialIconsDisplay(props) {
    let icons = SOCIAL_LINKS.map(link => {
        return (

            <li key={link.id.toString()} className='social-icon-item nav-link-style underscore'>
                <a href={link.url} className='rotate-animation'>
                    <SocialIcon icon={link.icon} />
                </a>
            </li>

        );
    });
    return (
        <React.Fragment>
            <ul className='social-icons-list' id={props.place}>
                {icons}
            </ul>
        </React.Fragment>

    );

}
