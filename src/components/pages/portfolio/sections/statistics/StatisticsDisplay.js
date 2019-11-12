import React from 'react';
import { STATISTICS } from './statistics-list';
import Statistica from './Statistica';
import { Row, Col } from 'reactstrap';

export default function StatisticsDisplay(props) {

    const statistics = STATISTICS.map(stat => {
        return (
            <Col className="m-3 p-3">
                <Statistica stat={stat} />
            </Col>

        );
    });

    return (
        <Row className="mx-5 mt-1 mb-5 px-5 justify-content-center align-items-center">
            {statistics}
        </Row >
    );
}