import React from 'react';
import SocialIconsDisplay from './social/SocialIconsDisplay';
import NavLinks from './navigation/NavLinksFooter';
import { Row, Col } from 'reactstrap';

export default function Footer(props) {
    return (
        <footer>
            <Row>
                <Col xs="6">
                    <NavLinks />
                </Col>
                <Col xs="6">
                    <SocialIconsDisplay />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <p>Made with love by SK</p>
                </Col>
            </Row>
        </footer>
    );

}