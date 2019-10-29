import React from 'react';
import CertificateCard from './CertificateCard';
import { CERTIFICATES_LIST } from './certificates-list';


export default function CertificatesDisplay(props) {

    const certificatesCards = CERTIFICATES_LIST.map(certificateCard => {
        return (
            <React.Fragment>
                    <CertificateCard name={certificateCard.name} link={certificateCard.link}
                        description={certificateCard.description} imgPath={certificateCard.imgPath}
                    />
            </React.Fragment>
        );
    });

    return (
        <React.Fragment>
        { certificatesCards }
        </React.Fragment>
    )

}