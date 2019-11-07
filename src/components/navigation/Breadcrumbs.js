import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function Breadcrumbs(props) {
  return (
    <Breadcrumb tag="nav" listTag="div" className="h-100">
      <BreadcrumbItem tag="a" href="/" className="link-style-hash text-decoration-none">Home</BreadcrumbItem>
      <BreadcrumbItem active tag="span" className="text-white link-style-hash">{props.page}</BreadcrumbItem>
    </Breadcrumb>

  );
};

