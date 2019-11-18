import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function ArticlePage(props) {
    //const topImgTop = props.article.images[0].path;
    //const altImgTop = props.article.images[0].alt;
    
    return (
        <Container className="bg-white">
            <Row>
                <Col xs='12'>
                    {/*<img className="w-100" src={topImgTop} alt={altImgTop} />*/ }
                    <h1>{props.article.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    {props.article.jsx}
                </Col>
            </Row>
        </Container>
    );
}