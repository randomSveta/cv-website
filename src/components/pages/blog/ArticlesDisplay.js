import React from 'react';
import { ARTICLES } from './articles';
import { Row, Col, Container } from 'reactstrap';
import ArticlePreview from './ArticlePreview';

export default function GitHubProjectsDisplay(props) {

    const articles = ARTICLES.sort((a, b) => b.year - a.year).map(article => {
        return (
            <ArticlePreview article={article} />
        );
    });

    return (
        <Container>
            <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
                <Col className="m-3 p-3">
                    {articles}
                </Col>
            </Row>
        </Container>
    )

}