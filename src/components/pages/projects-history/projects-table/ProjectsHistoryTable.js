import React from 'react';
import { Table } from 'reactstrap';
import { CURRENT_PROJECTS } from '../../../website-data/home/current-projects'

function createDate(string) {
    const date = new Date(string).toDateString();
    return date;
}

export default function ProjectsHistory(props) {
    let i = 0;
    const rows = CURRENT_PROJECTS.filter(project => project.isFinished).sort((a, b) => new Date(b.endDate) - new Date(a.endDate)).map(project => {
        i++;

        return (
            <tr>
                <th scope="row">{i}</th>
                <td><a href={project.projectLink}>{project.title}</a></td>
                <td>{project.description}{project.taskLink ? <a href={project.taskLink}>source</a> : null}</td>
                <td>{createDate(project.endDate)}</td>
            </tr >);
    })
    const emptyTableRow = <tr><th scope="row">1</th><td>There is nothing here yet...</td></tr>;

    return (
        <Table className="bg-white" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                {rows.length > 0 ? rows : emptyTableRow}
            </tbody>
        </Table>
    );
}
