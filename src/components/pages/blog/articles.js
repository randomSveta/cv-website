import React from 'react';

import BottomFooterArticle from './articles-text-components/BottomFooterArticle';
import LetConstVarArticle from './articles-text-components/LetsConstVarArticle';


export const ARTICLES = [
    {
        id: 1,
        url: '/place-footer-at-the-bottom/',
        title: 'Keep footer at the bottom',
        shortDescription: "If a page too short and footer is placed at the middle of the page let's force fotter to take it place and stay at the bootom no matter what.",
        jsx: <BottomFooterArticle/>,
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/footer-at-the-bottom.png') ,
            alt: 'Keep footer at the bottom'
        },
        { id:2,
            path: require('../../../assets/images/blog-page/articles/let-const-var-title.png'),
            alt: 'GGG'
        }
    ]
    },
    {
        id: 2,
        url: '/let-const-var/',
        title: 'Let vs Const vs Var',
        shortDescription: "Why there are 3 words for declare a variable? What is the difference? Let's try to use them and find out.",
        jsx: <LetConstVarArticle />,
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/let-const-var-title.png'),
            alt: 'Let vs Const vs Var'
        }]
    }
];

