
import React from 'react';
import { Row, Col } from 'reactstrap';

import PaginationComponent from '../../../../../PaginationComponent'
import "./pagination.css";


export default function CodePenProjectsPagination(props) {

    return (
        <Row className="m-md-5 px-md-5 py-0 m-2 px-2  justify-content-center align-items-center flex-wrap">
            <Col className="m-0 p-0" xs={12}>
                <PaginationComponent page={props.page} pagesTotal={props.pagesTotal} setPageNumber={props.setPageNumber} />
            </Col>
        </Row>
    );
}