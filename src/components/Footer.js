import React from 'react';
import SocialIconsDisplay from './social-icons/SocialIconsDisplay';
import NavLinks from './navigation/NavLinksFooter';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
    return (
        <footer id="footer">
            <Row>
                <Col xs="12" sm="6" className="footer-col">
                    <NavLinks />
                </Col>
                <Col xs="12" sm="6" className="footer-col">
                <SocialIconsDisplay place="footer-social"/>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <p className="footer-text">Made with love by SK  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></p>
                </Col>
            </Row>
        </footer>
    );

}