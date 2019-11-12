import React from 'react';
import { Card, CardLink, CardTitle, CardText } from 'reactstrap';

export default function ArticlePreview(props) {

    return (
        <div>
            <img />
            <h2>{props.article.title}</h2>
            <p>{props.article.text}</p>
        </div>
    );
}