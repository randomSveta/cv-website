import React from 'react';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function NavBarAchievments(props) {

    return (
        <React.Fragment>
 <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Achievements
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to="/cv">CV</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/certificates">Certificates</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/projects">Projects</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/blog">Blog</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
        </React.Fragment>
    );
}

