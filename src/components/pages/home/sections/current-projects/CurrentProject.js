import React from 'react';
import { Card, Button, CardTitle, CardText, Progress, CardBody, CardSubtitle, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CurrentProject extends React.Component {

    openProject() {
        window.open(this.props.project.projectLink, '_blank');
    }

    render() {
        const tooltipId = this.props.idTooltip;

        return (
            <Card inverse >
                <CardBody className="current-p-card">
                    <CardTitle>{this.props.project.title + ' '}</CardTitle>
                    <a href={this.props.project.taskLink} alt={this.props.project.title} className="link-style underscore-sections" target="_blank" rel="noopener noreferrer"><CardSubtitle><FontAwesomeIcon icon={this.props.project.icon} id={tooltipId} className="rotate-animation" /></CardSubtitle></a>
                    <UncontrolledTooltip placement="left" target={tooltipId}>
                        Link to the task
                    </UncontrolledTooltip>
                    <CardText>{this.props.project.description}</CardText>
                    <CardText className="mt-2">Progress:</CardText>
                    <Progress striped value={this.props.project.progress} className="my-3" color="info" />
                    <Button onClick={() => this.openProject()} color="secondary">Open project</Button>
                </CardBody>
            </Card>

        );
    }


}

