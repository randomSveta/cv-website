import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import CertificatesDisplay from './CertificatesDisplay';
import { Row, Col } from 'reactstrap';
import { SECTIONS_CERTIFICATES } from '../../navigation/links/nav-links'
import Section from '../Section';


export default function Certificates(props) {

    const sectionsDisplay = SECTIONS_CERTIFICATES.map(section => {
        return (
            <Section content={<CertificatesDisplay section={section.name}/>} name={section.name} />
        );
    });

    return (
        <React.Fragment>
            <Breadcrumbs page="Certificates" />
            <Row className="container-row-col">
                <Col xs='12'>
                    <h1 id='certificates-h1'>Certificates</h1>
                    <Row className="container-row-col">
                        <Col xs='12'>
                            {sectionsDisplay}
                        </Col>
                    </Row>
                </Col>
            </Row>

        </React.Fragment>

    );
}