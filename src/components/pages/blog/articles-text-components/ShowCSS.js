import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export default function ShowCSS(props) {
    return (
        <div>
            <Button color="info" id="final-css" style={{ marginBottom: '1rem', width: "100%" }}>
                {props.button}
            </Button>
            <UncontrolledCollapse toggler="#final-css">
                <Card>
                    <CardBody>
                        <code className="code-styles px-5 py-3 text-light bg-dark">
                            {props.css}
                        </code>

                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    );
}

