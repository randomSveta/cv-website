import React from 'react';
import { UncontrolledCollapse, Button, Nav, UncontrolledTooltip } from 'reactstrap';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function NavBarSections(props) {
    const sectionsNavList = props.sections;

    let sectionsNavLinks = [];
    if (sectionsNavList) {
        sectionsNavLinks = sectionsNavList.map(section => {
            return (
                <NavItem key={section.id} className="navbar-li-hash p-0 ml-2 mr-1 my-1">
                    <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style-hash p-0 m-1 underscore-sections text-decoration-none' to={process.env.PUBLIC_URL + section.hashUrl}
                    >{section.name}</NavHashLink>
                </NavItem>
            );
        });
    }

    if (sectionsNavLinks.length !== 0) {
        return (
            <div className="d-flex flex-md-row-reverse flex-column justify-content-center align-items-center">
                <Button id="hash-list-toggler" className="rounded-circle"><FontAwesomeIcon icon={faHashtag} className="active-item" /></Button>
                <UncontrolledTooltip placement="top" target="hash-list-toggler" delay={{ show: 200, hide: 0 }}>
                    Sections navigation
                </UncontrolledTooltip>
                <UncontrolledCollapse toggler="#hash-list-toggler">
                    <Nav>
                        {sectionsNavLinks}

                    </Nav>
                </UncontrolledCollapse>
            </div>

        );
    }
    else {
        return null;
    }
}

