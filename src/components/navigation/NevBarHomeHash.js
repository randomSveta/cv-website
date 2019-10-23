import React from 'react';

import {
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { HASH_LINKS_HOME } from '../links/nav-links';

export default function NavBarHomeHash(props) {


    const hashLinks = HASH_LINKS_HOME.map(link => {
        return (
            <NavItem key={link.id}>
                <NavHashLink smooth activeClassName= 'active-hash-item' to={link.hashUrl} 
               >{link.name}</NavHashLink>
            </NavItem>
        );
    });


    return (
        <React.Fragment>
            <NavItem key='0'>
                <NavLink exact activeClassName='active-item' to='/home'>Home</NavLink>
            </NavItem>
            {hashLinks}
        </React.Fragment>
    );
}

