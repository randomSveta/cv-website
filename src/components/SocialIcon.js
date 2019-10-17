import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialIcon(props) {
    return (<FontAwesomeIcon icon={props.icon} id={props.iconId} className="social-icon"/>);
}
