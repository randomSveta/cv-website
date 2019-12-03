import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export default function ShowCode(props) {


    return (
        <div>
            <Button color="info" id={props.codeId} style={{ marginBottom: '1rem', width: "100%" }}>
                {props.button}
            </Button>
            <UncontrolledCollapse toggler={props.codeId}>
                <Card>
                    <CardBody>
                        <code className="code-styles px-5 py-3 text-light bg-dark">
                            {props.code}
                        </code>

                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    );
}

