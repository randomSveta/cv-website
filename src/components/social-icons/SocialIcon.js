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
        else if (props.olace === 'hero'){
            listItemId = "h".concat(props.name).split(' ').join('');
        }
        iconTooltip =
            <UncontrolledTooltip placement="top" target={listItemId}>
                {props.name}
            </UncontrolledTooltip>
    }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={props.icon} className='rotate-animation' id={listItemId} />
            {iconTooltip}
        </React.Fragment>

    );
}
