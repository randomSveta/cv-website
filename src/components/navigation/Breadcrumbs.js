import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function Breadcrumbs(props) {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div" sticky>
        <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
        <BreadcrumbItem active tag="span">{props.page}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

