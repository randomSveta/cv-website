import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LINKS } from './links/nav-links';;

export default function NavBarPageLinks(props) {

    const navigationItems = LINKS.map(link => {
        return (
            <NavItem key={link.id}>
                <NavLink exact activeClassName='active-item' className="link-style nav-link-style underscore m-2" to={link.url}>{link.name}</NavLink>
            </NavItem>
        );

    });
    return (
        <React.Fragment>
            {navigationItems}
        </React.Fragment>




    );
}

