import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody, CardHeader, CardFooter
} from 'reactstrap';


export default function ArticlePreview(props) {

  const linkPath = props.sectionUrl.concat(props.article.url);
  const titleImagePath = props.article.previewImg.path;

  return (
    <Card className="rounded-0 article-preview-card">
      <CardHeader className="font-weight-bold text-center rounded-0 art-card-bg"><Link to={linkPath} className="link-style underscore text-decoration-none">{props.article.title}</Link></CardHeader>
      <CardImg top width="100%" src={titleImagePath} alt="Card image cap" />
      <CardBody>
        <CardText>{props.article.shortDescription}</CardText>
      </CardBody>
      <CardFooter className="rounded-0 text-center art-card-bg"><Link to={linkPath} className="link-style underscore text-decoration-none">Full article >></Link></CardFooter>
    </Card>
  );
}