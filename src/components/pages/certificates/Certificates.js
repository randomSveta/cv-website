import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import CertificatesDisplay from './CertificatesDisplay';
import { Row, Col } from 'reactstrap';
import { HASH_CERTIFICATES } from '../../navigation/links/nav-links'
import Section from '../Section';


export default function Certificates(props) {

    const sectionsDisplay = HASH_CERTIFICATES.map(section => {
        return (
            <Section key={section.id} content={<CertificatesDisplay section={section.name} />} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
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