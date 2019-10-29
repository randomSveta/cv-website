import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { SECTIONS_HOME } from './links/nav-links';

export default function NavBarHomeHash(props) {


    const hashLinks = SECTIONS_HOME.map(link => {
        return (
            <NavItem key={link.id} className="navbar-li-hash">
                <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style underscore nav-link-style' to={link.hashUrl} 
               >{link.name}</NavHashLink>
            </NavItem>
        );
    });


    return (
        <React.Fragment>
            {hashLinks}
        </React.Fragment>
    );
}

