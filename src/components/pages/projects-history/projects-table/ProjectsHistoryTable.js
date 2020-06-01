import React from 'react';
import { Table } from 'reactstrap';
import { FINISHED_PROJECTS } from '../../../website-data/projects-history/finished-projects';

function createDate(string) {
    const date = new Date(string).toDateString();
    return date;
}

export default function ProjectsHistory(props) {
    let i = 0;
    const rows = FINISHED_PROJECTS.filter(project => project.isFinished).sort((a, b) => new Date(b.endDate) - new Date(a.endDate)).map(project => {
        i++;

        return (
            <tr key={project.id}>
                <th scope="row">{i}</th>
                <td><a href={project.taskLink} target="_blank" rel="noopener noreferrer">{project.title}</a></td>
                <td>{project.description}<br />{project.projectLink ? <a href={project.projectLink} target="_blank" rel="noopener noreferrer">view project</a> : null}</td>
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
