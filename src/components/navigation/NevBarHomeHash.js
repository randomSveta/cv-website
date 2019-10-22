import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBarHomeHash(props) {

    return (
        <React.Fragment>
            <NavItem>
                <NavHashLink to="#about">About</NavHashLink>
            </NavItem>
            <NavItem>
                <NavHashLink to="#current-project">Current Project</NavHashLink>
            </NavItem>
            <NavItem>
                <NavHashLink to="#skills">Skills</NavHashLink>
            </NavItem>
        </React.Fragment>


    );
}

