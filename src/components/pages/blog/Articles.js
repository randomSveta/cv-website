import React from 'react';
import { ARTICLES } from '../../website-data/blog/articles';
import { Row, CardColumns, Container } from 'reactstrap';
import ArticlePreview from './ArticlePreview';

export default function Articles(props) {

    const articles = ARTICLES.sort((a, b) => b.id - a.id).map(article => {
        return (
            <ArticlePreview article={article} sectionUrl={props.sectionUrl} key={article.id} />
        );
    });

    return (
        <Container>
            <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
                <CardColumns className="m-3 p-3">
                    {articles}
                </CardColumns>
            </Row>
        </Container>
    )

}