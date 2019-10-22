import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { HASH_LINKS_HOME } from '../links/nav-links';

export default function NavBarHomeHash(props) {


    const hashLinks = HASH_LINKS_HOME.map(link => {
        return (
            <NavItem>
                <NavHashLink to={link.hashUrl}>{link.name}</NavHashLink>
            </NavItem>
        );
    });


    return (
        <React.Fragment>
            {hashLinks}
        </React.Fragment>
    );
}

