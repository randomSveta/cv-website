import React from 'react';
import { SKILLS } from '../../../../website-data/home/skills-list';
import SkillIcon from './SkillIcon';
import { Row, Col, Container } from 'reactstrap';


export default function Skills(props) {
    const skillsIconsDisplay = SKILLS.map(icon => {
        return (
            <Col xs="6" md="3" className="my-0 p-0 " key={icon.id}>
                <SkillIcon icon={icon.icon} name={icon.name} />
            </Col >);
    });
    return (
        <Container id="skills-display">
            <Row className="m-5 p-0 justify-content-center align-items-center">
                {skillsIconsDisplay}
            </Row>
        </Container>

    );
}


