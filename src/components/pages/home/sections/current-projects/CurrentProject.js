import React from 'react';
import { Card, Button, CardTitle, CardText, Progress, CardBody, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CurrentProject extends React.Component {

    openProject() {
        window.open(this.props.project.projectLink, '_blank');
    }

    openTask() {
        window.open(this.props.project.taskLink, '_blank');
    }

    openRepo() {
        window.open(this.props.project.repoLink, '_blank');
    }



    render() {

        return (
            <Card inverse >
                <CardBody className="current-p-card">
                    <CardTitle className="font-weight-bold">
                        {this.props.project.title}
                    </CardTitle>
                    <CardSubtitle><FontAwesomeIcon icon={this.props.project.icon} /></CardSubtitle>
                    <CardText>{this.props.project.description}</CardText>
                    <Progress striped value={this.props.project.progress} className="my-3" color="info" />
                    {this.props.project.projectLink ?
                        <Button onClick={() => this.openProject()} color="secondary" className="mr-2">Project</Button>
                        : null}
                    {this.props.project.taskLink ?
                        <Button onClick={() => this.openTask()} color="secondary" className="mr-2">Task</Button>
                        : null}
                    {this.props.project.repoLink ?
                        <Button onClick={() => this.openRepo()} color="secondary">Repository</Button>
                        : null}

                </CardBody>
            </Card>

        );
    }


}

