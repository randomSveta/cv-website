import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../website-data/pages-and-sections/pages';

export default function NavLinks(props) {

  const footerNavLinks = PAGES.filter(page => !page.isArticle && !page.isHistory).map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} className='link-style m-3 underscore text-decoration-none'>{link.name}</Link>
      </li>
    );
  });
  return (
    <ul id="nav-links-footer" className="d-flex flex-row list-unstyled justify-content-center align-items-center m-0 p-0">
      {footerNavLinks}
    </ul>
  );
}

