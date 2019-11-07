import React, { useState } from 'react';
import SocialIcon from '../social-icons/SocialIcon';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="nav-bar" color="dark" dark expand="md" sticky="top" className="pb-3 pl-3 pr-5 m-0">
            <NavbarBrand href="/" className='ml-3 mr-0 rotate-animation'><SocialIcon icon={faIceCream} /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} className="flex-md-column justify-content-end" navbar>
                <Nav className="mt-0 mx-0 mb-1 p-0 d-md-flex flex-md-row justify-content-end" navbar>
                    {props.navigationPages}
                </Nav>
                <Nav className="m-0 p-0  d-flex flex-row justify-content-end align-items-center border border-secondary" navbar>
                    {props.navigationHash}
                </Nav>
            </Collapse>
        </Navbar>
    );
}

