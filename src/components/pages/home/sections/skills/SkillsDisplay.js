import React from 'react';
import { SKILLS } from './skills-list';
import SkillIcon from './SkillIcon';
import { Row, Col, Progress } from 'reactstrap';


export default function Skills(props) {
    const skillsIconsDisplay = SKILLS.map(icon => {
        return (
            <Col xs="6" sm="3" className='skills-icon-item text-center m-2 border p-2' key={icon.id}>
                <SkillIcon icon={icon.icon} />
                <Progress value={icon.progress} className="mr-5 ml-5 mt-2 mb-2">{icon.progress}%</Progress>
                <p className="mt-1 mb-0 p-0">{icon.name}</p>
            </Col >);
    });
    return (
        <Row className="m-0 pt-5 pb-5 pr-0 pl-0 justify-content-center align-items-center">
            {skillsIconsDisplay}
        </Row>


    );
}


