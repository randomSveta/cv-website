import React from 'react';
import { Table } from 'reactstrap';

export default function ProjectsHistory(props) {
    return (
        <Table className="bg-white" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Project</th>
                    <th>Date</th>
                    <th>Source</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </tbody>
        </Table>
    );
}
