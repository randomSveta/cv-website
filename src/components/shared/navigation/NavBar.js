import React, { useState } from 'react';
import SocialIcon from '../social-icons/SocialIcon';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container
} from 'reactstrap';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

import "../../../styles/css/navigation.css"

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="nav-bar" dark expand="md" sticky="top" className="p-md-3 m-0 app-dark-bg">
            <Container className="mw-100 m-0 px-4 py-0">
                <NavbarBrand href={process.env.PUBLIC_URL + "/"} className='m-0 p-0 app-link-rotate-animation' aria-label="Link to the main page from the ice cream logo" ><SocialIcon image={faIceCream} name="Logo" place="navbar-brand" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} className="m-0 p-0 justify-content-end align-items-center" navbar>
                    {props.navigationSections}
                    <Nav className="m-0 p-0 d-md-flex flex-md-row justify-content-end" navbar>
                        {props.navigationPages}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

