import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { SKILLS } from '../../../../website-data/home/skills';
import SkillIcon from './SkillIcon';

export default function Skills(props) {

    const skillIcons = SKILLS.map(icon => {
        return (
            <Col xs="6" md="3" className="my-0 p-0 " key={icon.id}>
                <SkillIcon icon={icon.icon} name={icon.name} />
            </Col >);
    });
    return (
        <Container id="skills">
            <Row className="m-5 p-0 justify-content-center align-items-center">
                {skillIcons}
            </Row>
        </Container>

    );
}


