import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function Breadcrumbs(props) {
  return (
    <Breadcrumb tag="nav" listTag="div" className="h-100">
      <BreadcrumbItem tag="a" href="/" className="link-style-hash text-decoration-none">Home</BreadcrumbItem>
      {props.article ?
        <React.Fragment>
          <BreadcrumbItem tag="a" href={props.secondStepUrl} className="link-style-hash text-decoration-none">{props.secondStep}</BreadcrumbItem>
          <BreadcrumbItem active tag="span" className="text-white link-style-hash">{props.thirdStep}</BreadcrumbItem>
        </React.Fragment>
        : <React.Fragment>
          <BreadcrumbItem active tag="span" className="text-white link-style-hash">{props.secondStep}</BreadcrumbItem>
        </React.Fragment>
      }

    </Breadcrumb>

  );
};

