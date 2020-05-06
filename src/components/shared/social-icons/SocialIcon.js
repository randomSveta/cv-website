import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UncontrolledTooltip } from 'reactstrap';

export default function SocialIcon(props) {

    let listItemId;
    let iconTooltip;

    if (props.name) {
        listItemId = props.name.split(' ').join('');
        if (props.place === 'footer') {
            listItemId = "f".concat(props.name).split(' ').join('');
        }
        else if (props.place === 'hero'){
            listItemId = "h".concat(props.name).split(' ').join('');
        }
        else if(props.place === 'navbar-brand'){
            listItemId = "logo-ice-cream";
        }

        iconTooltip =
            <UncontrolledTooltip placement="top" target={listItemId} delay={{ show: 150, hide: 0}}>
                {props.name}
            </UncontrolledTooltip>
    }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={props.image} className='rotate-animation' id={listItemId} aria-hidden="true"/>
            {iconTooltip}
        </React.Fragment>

    );
}
