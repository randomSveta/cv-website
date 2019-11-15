import React from 'react';
import SocialIconsDisplay from './social-icons/SocialIconsDisplay';
import NavLinks from './navigation/NavLinksFooter';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
    return (
        <footer id="footer">
            <Row className="m-0 p-0">
                <Col xs="12" md="6" className="m-0 p-0 d-flex flex-row justify-content-center align-items-center">
                    <NavLinks />
                </Col>
                <Col xs="12" md="6" className="m-0 p-0">
                    <SocialIconsDisplay place="footer"/>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col xs="12" className="m-0 p-0">
                    <p className="text-center text-white">Made with love by SK  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></p>
                </Col>
            </Row>
        </footer>
    );

}