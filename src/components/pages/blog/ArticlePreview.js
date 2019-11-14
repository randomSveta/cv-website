import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export default function ArticlePreview(props) {

const linkPath = props.sectionUrl.concat(props.article.url);

console.log(linkPath);
    return (
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.article.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.article.shortDescription}</CardText>
          <Link to={linkPath}>Link</Link>
        </CardBody>
      </Card>
    );
}