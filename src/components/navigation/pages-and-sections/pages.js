import React from 'react';
import { SECTIONS_HOME, SECTIONS_PORTFOLIO } from './sections';
import { ARTICLES } from '../../pages/blog/articles';
import Home from '../../pages/home/Home';

import Portfolio from '../../pages/portfolio/Portfolio';
import Blog from '../../pages/blog/Blog';
import ArticlePage from '../../pages/blog/ArticlePage';



export const PAGES = [
    {
        id: 1,
        name: 'Home',
        url: '/',
        sections: SECTIONS_HOME,
        article: false,
        jsx: <Home/>
    },
    {
        id: 3,
        name: 'Portfolio',
        url: '/portfolio',
        sections: SECTIONS_PORTFOLIO,
        article: false,
        jsx: <Portfolio/>
    },
    {
        id: 4,
        name: 'Blog',
        url: '/blog',
        article: false,
        jsx: <Blog/>
    }
]

ARTICLES.forEach(article => {
    const pageUrl = '/blog';
    PAGES.push({
        id: PAGES.length,
        name: article.title,
        page: 'Blog',
        pageUrl: pageUrl,
        url: pageUrl.concat(article.url),
        article: true,
        jsx: <ArticlePage />
    })

});