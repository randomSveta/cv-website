import React from 'react';
import SocialIcon from './SocialIcon';
import { faLinkedin, faGithub, faFreeCodeCamp, faCodepen, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const LINKS = [
    {
        id: 1,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faLinkedin
    },
    {
        id: 2,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faGithub
    },
    {
        id: 3,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faFreeCodeCamp
    },
    {
        id: 4,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faCodepen
    },
    {
        id: 5,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faCode
    },
    {
        id: 6,
        name: "Linked In",
        url: "https://www.linkedin.com/in/svetaklimova/",
        icon: faWordpress
    }

]

export default function SocialIconsDisplay(props) {
    let icons = LINKS.map(link => {
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
