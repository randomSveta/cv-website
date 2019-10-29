import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import CertificatesDisplay from './CertificatesDisplay';
import { Row, Col } from 'reactstrap';

export default function Certificates(props) {

    return (
        <React.Fragment>
            <Breadcrumbs page="Certificates" />
            <Row>
                <Col xs='12'>
                    <h1 id='certificates-h1'>Certificates</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <h2>Web Development</h2>
                </Col>
                <Col>
                    <CertificatesDisplay />
                </Col>
            </Row>
        </React.Fragment>

    );
}