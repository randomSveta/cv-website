import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function ArticlePage(props) {
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h1>{props.article.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <div/>
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