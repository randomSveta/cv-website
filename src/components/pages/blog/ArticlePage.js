import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ArticlePage(props) {

    return (
        <Container className="">
            <Row>
                <Col className="text-center p-3">
                    <Link className="app-link app-link-underscore text-decoration-none" to={'/blog'}><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> All articles</Link>
                </Col>
            </Row>
            <Row>
                <Col xs="2">
                </Col>
                <Col xs="12">
                    <h1 className="text-center text-white">{props.article.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <article className="m-3 p-3 bg-info">
                        {props.article.jsx}
                    </article>
                </Col>
            </Row>
            <Row>
                <Col className="text-center p-3">
                    <Link className="app-link app-link-underscore text-decoration-none" to={'/blog'}><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> All articles</Link>
                </Col>
            </Row>
        </Container>
    );
}