import React, { useState } from 'react';
import SocialIcon from '../social-icons/SocialIcon';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { faIceCream} from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar id="nav-bar" expand="md" sticky="top">
            <NavbarBrand href="/" className='rotate-animation'><SocialIcon icon={faIceCream}/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                   {props.navigationHash}
                   {props.navigationAchievments}
                   {props.navigationPages}
                </Nav>
            </Collapse>
        </Navbar>
    );
}

