import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBarHash(props) {

    const hashLinksList = props.links;
    const hashLinks = hashLinksList.map(link => {
        return (
            <NavItem key={link.id} className="navbar-li-hash mt-2">
                <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style-hash m-1 p-1 text-decoration-none' to={link.hashUrl}
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

