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
            <Row className="m-0 p-0">
                <h1 className="text-center w-100">Certificates</h1>
                <Col xs='12' className='m-0 p-0'>
                    {sectionsDisplay}
                </Col>
            </Row>
        </React.Fragment>

    );
}