import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function SendEmail(props) {
    return (
        <div id="form">
            <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="name" className="mr-sm-2">Your Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Your Name" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="message" className="mr-sm-2">Message</Label>
                    <Input type="textarea" name="message" id="message" placeholder="Your Message" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>

    );
}

