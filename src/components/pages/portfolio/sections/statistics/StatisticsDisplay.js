import React from 'react';
import { STATISTICS } from './statistics-list';
import Statistica from './Statistica';
import { Row, Col, Container } from 'reactstrap';

export default function StatisticsDisplay(props) {

    const statistics = STATISTICS.map(stat => {
        return (
            <Col className="m-0 p-0">
                <Statistica stat={stat} />
            </Col>

        );
    });

    return (
        <Container>
            <Row className="m-md-5 px-md-5 py-0 m-2 px-2  justify-content-center align-items-center flex-wrap">
                {statistics}
            </Row >
        </Container>
    );
}