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
        <Navbar id="nav-bar" dark expand="md" sticky="top" className="py-md-3 pl-md-3 pr-md-5 m-0">
            <NavbarBrand href="/" className='ml-3 mr-0 my-0 rotate-animation'><SocialIcon icon={faIceCream} /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} className="m-0 p-0 justify-content-end align-items-center" navbar>
                {props.navigationSections}
                <Nav className="m-0 p-0 d-md-flex flex-md-row justify-content-end" navbar>
                    {props.navigationPages}
                </Nav>
            </Collapse>
        </Navbar>
    );
}

