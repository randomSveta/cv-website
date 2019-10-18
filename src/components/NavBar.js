import React, { useState } from 'react';
import SocialIcon from './SocialIcon';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/"><SocialIcon icon={faCoffee} /></NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Current Project</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contacts</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Achievements
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Projects
                </DropdownItem>
                                <DropdownItem>
                                    Certificates
                </DropdownItem>
                                <DropdownItem>
                                    CV
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

