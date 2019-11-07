import React from 'react';
import { Row, Col } from 'reactstrap';
import { ABOUT_TEXT_BLOCKS } from './about-text-list';

export default function AboutTextsDisplay(props) {
    const textDisplay = ABOUT_TEXT_BLOCKS.map(text => {
        return (
            <Col xs="12" md="4" className='m-0 p-0' key={text.id}>
                <div className="m-3 p-3">
                    <img src={text.imgPath} alt={text.alt} className="rounded-circle about-img mx-auto d-block mb-4" />
                    <p className='about-text'>
                        {text.text}
                    </p>
                </div>
            </Col>
        );
    });

    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {textDisplay}
        </Row>
    );
}