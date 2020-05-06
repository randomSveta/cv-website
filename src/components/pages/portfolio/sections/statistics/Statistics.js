import React from 'react';
import { STATISTICS } from '../../../../website-data/portfolio/statistics-list';
import StatisticaCard from './StatisticaCard';
import { Row, Col, Container } from 'reactstrap';

import "../../../../../styles/css/statistics.css";


export default function Statistics(props) {

    const statistics = STATISTICS.map(stat => {
        return (
            <Col className="m-0 p-0" key={stat.id} >
                <StatisticaCard stat={stat} />
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


