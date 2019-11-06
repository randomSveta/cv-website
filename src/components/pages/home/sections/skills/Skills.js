import React from 'react';
import { SKILLS } from './skills-list';
import SkillIcon from './SkillIcon';
import { Row } from 'reactstrap';


export default function Skills(props) {
    const skillsIconsDisplay = SKILLS.map(icon => {
        return <SkillIcon icon={icon.icon} name={icon.name} id={icon.id}/>
    });
    return (
        <React.Fragment>
            <Row className="m-0 p-0 justify-content-center">
                {skillsIconsDisplay}
            </Row>
        </React.Fragment>


    );
}


