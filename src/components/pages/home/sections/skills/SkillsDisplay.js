import React from 'react';
import { SKILLS } from './skills-list';
import SkillIcon from './SkillIcon';
import { Row, Col, Progress } from 'reactstrap';


export default function Skills(props) {
    const skillsIconsDisplay = SKILLS.map(icon => {
        return (
            <Col xs="6" md="4" className="m-0 p-0" key={icon.id}>
                <div className="m-3 p-3 border skills-icon-item text-center">
                    <SkillIcon icon={icon.icon} />
                    <p className="m-0 p-0">{icon.name}</p>
                    <Progress value={icon.progress} striped color="dark" />
                </div>
            </Col >);
    });
    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {skillsIconsDisplay}
        </Row>


    );
}


