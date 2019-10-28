import React from 'react';
import Footer from '../../Footer';
import NavBar from '../../navigation/NavBar';
import NavBarPageLinks from '../../navigation/NavBarPageLinks';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import CertificatesDisplay from './CertificatesDisplay';
import { Row} from 'reactstrap';

export default function Certificates(props) {

    const navPages = <NavBarPageLinks />
    return (
        <React.Fragment>
            <NavBar navigationPages={navPages} />
            <Breadcrumbs page="Certificates" />
            <Row>
                    <CertificatesDisplay />
            </Row>
            <Footer />
        </React.Fragment>

    );
}