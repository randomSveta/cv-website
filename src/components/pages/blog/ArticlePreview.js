import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardFooter
} from 'reactstrap';


export default function ArticlePreview(props) {

  const linkPath = props.sectionUrl.concat(props.article.url);
  const titleImagePath = props.article.images[0].path;

  return (
    <Card className="rounded-0 article-preview-card">
      <CardImg top width="100%" src={titleImagePath} alt="Card image cap" />
      <CardBody>
        <CardTitle className="font-weight-bold text-center">{props.article.title}</CardTitle>
        <CardText>{props.article.shortDescription}</CardText>
      </CardBody>
      <CardFooter className="rounded-0 text-center art-card-bg"><Link to={linkPath} className="link-style underscore text-decoration-none">Full article</Link></CardFooter>
    </Card>
  );
}