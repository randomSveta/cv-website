import React from 'react';
import { Table } from 'reactstrap';
import { CERTIFICATES } from '../../../website-data/projects-history/certificates';

export default function CertificatesTable(props) {
    let i = 0;
    const rows = CERTIFICATES.sort((a, b) => b.year - a.year).map(certificate => {
        i++;
        return (
            <tr key={certificate.id}>
                <th scope="row">{i}</th>
                <td><a href={certificate.link ? certificate.link : undefined} target="_blank" rel="noopener noreferrer">{certificate.title}</a></td>
                <td>{certificate.year}</td>
            </tr>);
    })
    const emptyTableRow = <tr><th scope="row">1</th><td>There is nothing here yet...</td></tr>;

    return (
        <Table className="bg-white" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {rows.length > 0 ? rows : emptyTableRow}
            </tbody>
        </Table>
    );
}
