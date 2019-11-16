import React from 'react';
import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS } from './links/social-links';

export default function SocialIconsDisplay(props) {

    let icons = SOCIAL_LINKS.map(link => {
        return (
            <li key={link.id} className='social-icon-item  m-3'>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-style underscore">
                    <SocialIcon icon={link.icon} name={link.name} place={props.place} />
                </a>
            </li>

        );
    });
    return (
        <React.Fragment>
            <ul className='list-unstyled d-flex flex-direction-row flex-wrap justify-content-center align-items-center m-0 p-0'>
                {icons}
            </ul>
        </React.Fragment>

    );

}
