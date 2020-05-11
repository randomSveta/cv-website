import React from 'react';
import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS } from '../../website-data/social-links/social-links';

import "../../../styles/css/social-icons.css"

export default function SocialIconsLayout(props) {

    let icons = SOCIAL_LINKS.map(link => {
        return (
            <li key={link.id} className='social-icon-item  m-3'>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="app-link app-link-underscore" aria-label={"Link to " + link.name}>
                    <SocialIcon image={link.image} name={link.name} place={props.place} />
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
