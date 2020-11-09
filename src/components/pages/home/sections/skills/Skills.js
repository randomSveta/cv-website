import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { SKILLS, ADDITIONAL_SKILLS } from '../../../../website-data/home/skills';
import SkillIcon from './SkillIcon';

export default function Skills(props) {

    const skillIcons = SKILLS.map(icon => {
        return (
            <Col xs="6" md="3" className="my-0 p-0 " key={icon.id}>
                <SkillIcon icon={icon.icon} name={icon.name} />
            </Col >);
    });

    const additionalSkills = ADDITIONAL_SKILLS.map(skill => {
        return <li className="p-1 w-25 m-1 list-inline-item text-white" key={skill.id}>{skill.name}</li>
    })
    return (
        <Container id="skills">
            <Row className="m-5 p-0 justify-content-center align-items-center">
                {skillIcons}
            </Row>
            <Row className="m-5 p-0 justify-content-center align-items-center">
                <Col xs="12" className="my-0 p-0">
                    <ul className="list-unstyled list-inline text-center">
                        {additionalSkills}
                    </ul>
                </Col>
            </Row>
        </Container>

    );
}


