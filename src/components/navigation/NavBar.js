import React, { useState } from 'react';
import SocialIcon from '../social/SocialIcon';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><SocialIcon icon={faCoffee} /></NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink to="#about">About</NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink to="#current-project">Current Project</NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink to="#skills">Skills</NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Achievements
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink to="/projects">Projects</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to="/certificates">Certificates</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to="/cv">CV</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink to="/blog">Blog</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

