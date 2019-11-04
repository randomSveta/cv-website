import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBarHash(props) {
    console.log(props);

    const hashLinksList = props.links;
    const hashLinks = hashLinksList.map(link => {
        return (
            <NavItem key={link.id} className="navbar-li-hash">
                <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style-hash underscore text-decoration-none m-2' to={link.hashUrl}
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

