import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import { Row, Col } from 'reactstrap';
import { HASH_PROJECTS } from '../../navigation/links/nav-links'
import Section from '../Section';
import CodePenProjectsDisplay from './sections/codepen-projects/CodePenProjectsDisplay';


export default function Certificates(props) {

    const codePenSectionsDisplay = HASH_PROJECTS.map(section => {
        return (
            <Section key={section.id} content={<CodePenProjectsDisplay section={section.name}/>} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (
        <React.Fragment>
            <Breadcrumbs page="Projects" />
            <Row className="container-row-col">
                <Col xs='12'>
                    <Row className="container-row-col">
                        <Col xs='12'>
                            {codePenSectionsDisplay}
                        </Col>
                    </Row>
                </Col>
            </Row>

        </React.Fragment>

    );
}