import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ArticlePage(props) {
    //const topImgTop = props.article.images[0].path;
    //const altImgTop = props.article.images[0].alt;

    return (
        <Container className="">
            <Row>
                <Col className="text-center p-3">
                    <Link className="link-style underscore text-decoration-none" to={'/blog'}><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true"/> Blog</Link>
                </Col>
            </Row>
            <Row>
                <Col xs="2">
                </Col>
                <Col xs='12'>
                    {/*<img className="w-100" src={topImgTop} alt={altImgTop} />*/}
                    <h1 className="text-center text-white">{props.article.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <article className="m-3 p-3 bg-info">
                        {props.article.jsx}
                    </article>
                </Col>
            </Row>
            <Row>
                <Col className="text-center p-3">
                    <Link className="link-style underscore text-decoration-none" to={'/blog'}><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Blog</Link>
                </Col>
            </Row>
        </Container>
    );
}