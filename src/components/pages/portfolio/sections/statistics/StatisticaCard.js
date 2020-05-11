import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UncontrolledTooltip } from 'reactstrap';

export default function StatisticaCard(props) {
    const tooltipId = 's-'.concat(props.stat.profile.toLowerCase().split(' ').join('-'));
    return (
        <div className="mb-2 mb-md-0 mx-auto rounded-circle statistica-card text-white d-flex flex-column justify-content-center align-items-center flex-wrap app-dark-bg">
            <a id={tooltipId} href={props.stat.url} target="_blank" rel="noopener noreferrer" className="app-link app-link-underscore" aria-label={"Link to the " + props.stat.profile + " profile"}><FontAwesomeIcon icon={props.stat.image} className="app-link-rotate-animation" aria-hidden="true" /></a>
            <UncontrolledTooltip placement="top" target={tooltipId} delay={{ show: 150, hide: 0 }}>
                {props.stat.profile}
            </UncontrolledTooltip>
            <p className="m-0 p-1">{props.stat.profile}</p>
            <p className="statistica-card-points m-0 p-1 font-weight-bold">{props.stat.points}</p>
        </div>
    );
}


