import React from 'react';
import { Table } from 'reactstrap';
import { CURRENT_PROJECTS } from '../../website-data/home/current-projects'

function createDate(string) {
    const date = new Date(string).toDateString();
    return date;
}

export default function ProjectsHistory(props) {
    let i = 0;
    const rows = CURRENT_PROJECTS.map(project => {
        if (project.isFinished) {
            i++;

            return (
                <tr>
                    <th scope="row">{i}</th>
                    <td>{project.title}</td>
                    <td>{project.projectLink}</td>
                    <td>{createDate(project.endDate)}</td>
                    <td><a href={project.taskLink}>{project.taskLink}</a></td>
                </tr>)
        }
    })
    return (
        <Table className="bg-white" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Project</th>
                    <th>End Date</th>
                    <th>Source</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}
