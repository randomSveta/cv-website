import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import { Row, Col } from 'reactstrap';
import { SECTIONS_PORTFOLIO } from '../../navigation/links/nav-links'
import Section from '../Section';
import CodePenProjectsDisplay from './sections/codepen-projects/CodePenProjectsDisplay';


export default function Portfolio(props) {

    const codePenSectionsDisplay = SECTIONS_PORTFOLIO.map(section => {
        return (
            <Section key={section.id} content={<CodePenProjectsDisplay section={section.name} />} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (
        <React.Fragment>
            <Breadcrumbs page="Projects" />
            <Row className="m-0 p-0 justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    {codePenSectionsDisplay}
                </Col>
            </Row>
        </React.Fragment>

    );
}