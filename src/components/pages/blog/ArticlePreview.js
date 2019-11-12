import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticlePreview(props) {
    console.log(props);
const linkPath = props.sectionUrl.concat(props.article.url);

console.log(linkPath);
    return (
        <div>
            <img />
            <h2>{props.article.title}</h2>
            <p>{props.article.text}</p>
            <Link to={linkPath}>Link</Link>
        </div>
    );
}