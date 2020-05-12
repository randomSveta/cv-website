import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export default function ShowCode(props) {


    return (
        <div>
            <Button color="info" id={props.codeId} style={{ marginBottom: '1rem', marginTop: '1rem', width: "100%" }}>
                {props.button}
            </Button>
            <UncontrolledCollapse toggler={props.codeId}>
                <Card>
                    <CardBody>
                        <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">
                            {props.code}
                        </code>

                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    );
}

