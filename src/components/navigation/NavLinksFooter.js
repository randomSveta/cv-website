import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './links/nav-links';

export default function NavLinks(props) {

  const footerNavLinks = LINKS.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} className='link-style'>{link.name}</Link>
      </li>
    );
  });
  return (
    <ul id="nav-links-footer">
      {footerNavLinks}
    </ul>
  );
}

