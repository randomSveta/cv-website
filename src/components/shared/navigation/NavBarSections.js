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
                <NavItem key={section.id} className="navigation-section-item p-0 ml-2 mr-1 my-1">
                    <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='app-link p-0 m-1 app-link-underscore text-decoration-none' to={section.hashUrl}
                    >{section.name}</NavHashLink>
                </NavItem>
            );
        });
    }
    if (sectionsNavLinks.length > 1) {
        return (
            <div className="d-flex flex-md-row-reverse flex-column justify-content-center align-items-center">
                <Button id="navigation-sections-toggle" className="rounded-circle"><FontAwesomeIcon icon={faHashtag} className="navigation-active-item" /></Button>
                <UncontrolledTooltip placement="top" target="navigation-sections-toggle" delay={{ show: 200, hide: 0 }}>
                    Sections navigation
                </UncontrolledTooltip>
                <UncontrolledCollapse toggler="#navigation-sections-toggle">
                    <Nav>
                        {sectionsNavLinks}
                    </Nav>
                </UncontrolledCollapse>
            </div>

        );
    } else {
        return null;
    }
}

