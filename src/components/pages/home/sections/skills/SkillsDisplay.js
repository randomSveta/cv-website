import React from 'react';
import { SKILLS } from './skills-list';
import SkillIcon from './SkillIcon';
import { Row, Col } from 'reactstrap';


export default function Skills(props) {
    const skillsIconsDisplay = SKILLS.map(icon => {
        return (
            <Col xs="6" md="3" className="m-0 p-0" key={icon.id}>
                <SkillIcon icon={icon.icon} name={icon.name} />
            </Col >);
    });
    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {skillsIconsDisplay}
        </Row>


    );
}


