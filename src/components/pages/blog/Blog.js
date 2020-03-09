import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArticlesDisplay from './ArticlesDisplay';
import Section from '../Section';

import "./blog.css";

export default function Blog(props) {
    return (
        <Container id="blog" className="mw-100 m-0 px-4 py-0">
            <Row className="m-0 p-0 justify-content-center align-items-center m-0 p-0 ">
                <Col xs='12' className="m-0 p-0 ">
                    <h1 className="text-white">Blog</h1>
                </Col>
            </Row>
            <Row className="m-0 p-0 justify-content-center align-items-center m-0 p-0">
                <Col xs='12' className="m-0 p-0">
                    <Section content={<ArticlesDisplay sectionUrl='/blog' />} name="Articles" sectionId="articles" />
                </Col>
            </Row>
        </Container>


    );
}