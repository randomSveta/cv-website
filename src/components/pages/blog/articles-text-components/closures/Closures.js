import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ARTICLES } from "../../articles";


export default function Closures(props) {

    const articleAbsolute = ARTICLES.filter(article => article.url === "/closures/")[0];
    const previewImg = articleAbsolute.previewImg.path;
    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark">
                <Container >
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                beep-beep
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={articleAbsolute.title} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Initial settings</h2>
                            <p>
                                beep-beep
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

