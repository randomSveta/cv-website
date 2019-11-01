import React from 'react';
import CertificateCard from './CertificateCard';
import { CERTIFICATES_LIST } from './certificates-list';
import { Row, Col } from 'reactstrap';

export default function CertificatesDisplay(props) {

    const certificatesCards = CERTIFICATES_LIST.filter(cert => cert.section === props.section).sort((a, b) => b.year - a.year).map(certificateCard => {

        return (

            <Col xs="12" sm="4" key={certificateCard.id}>
                <CertificateCard name={certificateCard.name} link={certificateCard.link}
                    description={certificateCard.description} imgPath={certificateCard.imgPath}
                    year={certificateCard.year} organization={certificateCard.organization}
                />
            </Col>
        );
    });

    return (

        <React.Fragment>
            <Row>
                {certificatesCards}
            </Row>
        </React.Fragment>




    )

}