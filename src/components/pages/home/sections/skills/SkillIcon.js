import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';

export default function SkillIcon(props) {
    return (
        <Col xs="4" sm="3" className='skills-icon-item text-center m-2 border p-2' key={props.id}>
            <FontAwesomeIcon icon={props.icon}/>
            <p className="mt-1 mb-0 p-0">{props.name}</p>
        </Col>

    );
}