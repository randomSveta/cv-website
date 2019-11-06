import React from 'react';
import { Row, Col } from 'reactstrap';
import { ABOUT_TEXT_BLOCKS } from './about-text-list';

export default function AboutTextsDisplay(props) {
    const textDisplay = ABOUT_TEXT_BLOCKS.map(text => {
        return (
            <Col xs="12" sm="3" className='text-center m-2 p-2' key={text.id}>
                <img src={text.imgPath} alt={text.alt} className="rounded-circle about-img mx-auto d-block mb-4" />
                <p className='about-text'>
                    {text.text}
                </p>
            </Col>
        );
    });

    return (
        <Row className="m-0 pt-5 pb-5 pr-0 pl-0 justify-content-center align-items-center">
            {textDisplay}
        </Row>
    );
}