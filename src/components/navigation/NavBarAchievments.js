import React from 'react';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LINKS } from '../links/nav-links';

export default function NavBarAchievments(props) {
    const dropdownItems = LINKS.map(link => {
        if (link.name !== 'Home') {
            return (
                <DropdownItem>
                    <Link to={link.url}>{link.name}</Link>
                </DropdownItem>)
        }
        else {
            return null;
        }
    });
    return (
        <React.Fragment>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Achievements
                        </DropdownToggle>
                <DropdownMenu right>
                    {dropdownItems}
                </DropdownMenu>
            </UncontrolledDropdown>
        </React.Fragment>
    );
}

