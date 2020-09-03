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

        const projectLinks = project.projectLinks;
        const projectLinksList =
            Array.isArray(projectLinks) && projectLinks.length
                ?
                <React.Fragment>
                    <p className="m-0 p-0"><strong>Solution:</strong></p>
                    <ul className="list-unstyled m-0 p-0">
                        {projectLinks.map(linkSet => {
                            return <li>{<a href={linkSet[1]} target="_blank" rel="noopener noreferrer">{linkSet[0]}</a>}</li>
                        })}
                    </ul>
                </React.Fragment>
                : null;


        return (
            <tr key={project.id}>
                <th scope="row">{i}</th>
                <td><a href={project.taskLink} target="_blank" rel="noopener noreferrer">{project.title}</a></td>
                <td>
                    <p className="m-0 p-0">{project.description}</p><br />
                    {projectLinksList}
                </td>
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
