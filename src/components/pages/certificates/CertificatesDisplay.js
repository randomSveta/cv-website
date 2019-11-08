import React from 'react';
import CertificateCard from './CertificateCard';
import { CERTIFICATES_LIST } from './certificates-list';
import { Row, CardColumns } from 'reactstrap';

export default function CertificatesDisplay(props) {

    const certificatesCards = CERTIFICATES_LIST.filter(cert => cert.section === props.section).sort((a, b) => b.year - a.year).map(certificateCard => {

        return (

            // <Col xs="12" sm="4" key={certificateCard.id} >
            <CertificateCard key={certificateCard.id} name={certificateCard.name} link={certificateCard.link}
                description={certificateCard.description} imgPath={certificateCard.imgPath}
                year={certificateCard.year} organization={certificateCard.organization}
            />
        );
});

return (

    <React.Fragment>
        <Row className="mx-5 mt-3 mb-5 px-5 justify-content-center">
            <CardColumns>
                {certificatesCards}
            </CardColumns>
        </Row>
    </React.Fragment>




)

}