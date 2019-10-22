import React from 'react';
import SocialIcon from './SocialIcon';
import {SOCIAL_LINKS} from '../links/social-links';



export default function SocialIconsDisplay(props) {
    let icons = SOCIAL_LINKS.map(link => {
        return (

            <li key={link.id.toString()} className='social-icon-item'>
                <a href={link.url}>
                    <SocialIcon icon={link.icon} iconId={link.id} />
                </a>
            </li>

        );
    });
    return (
        <React.Fragment>
            <ul className='social-icons-list'>
                {icons}
            </ul>
        </React.Fragment>

    );

}
