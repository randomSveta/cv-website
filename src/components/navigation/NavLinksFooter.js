import React from 'react';

import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default function NavLinks(props) {

    return (
        <Nav vertical>
            <NavItem>
                <NavLink href="#">Contacts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Certificates</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">CV</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Blog</NavLink>
            </NavItem>
        </Nav>
    );
}

