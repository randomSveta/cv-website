import React from 'react';
import CertificateCard from './CertificateCard';
import { Col } from 'reactstrap';
import { CERTIFICATES_LIST } from './certificates-list';


export default function CertificatesDisplay(props) {

    const certificatesCards = CERTIFICATES_LIST.map(certificateCard => {
        return (
            <React.Fragment>
                <Col xs='4'>
                    <CertificateCard name={certificateCard.name} link={certificateCard.link}
                        description={certificateCard.description} imgPath={certificateCard.imgPath}
                    />
                </Col>
            </React.Fragment>
        );
    });

    return (
        <React.Fragment>
        { certificatesCards }
        </React.Fragment>
    )

}