import React from 'react';

import BottomFooterMinHeight from './articles-text-components/BottomFooterMinHeight';
import BottomFooterAbsolute from './articles-text-components/BottomFooterAbsolute';
import BottomFooterFixed from './articles-text-components/BottomFooterFixed';

import LetConstVarArticle from './articles-text-components/LetsConstVarArticle';

export const ARTICLES = [
    {
        id: 1,
        url: '/footer-bottom-min-height/',
        title: 'Footer at the bottom. "min-height"' ,
        shortDescription: 'Short content and a footer is "flying"? No problem, show the footer its place. Highest standard!',
        jsx: <BottomFooterMinHeight/>,
        date: '21/11/2019',
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/footer/preview-image-1.png') ,
            alt: 'Keep footer at the bottom.'
        }
    ]
    },
    {
        id: 2,
        url: '/footer-bottom-absolute/',
        title: 'Footer at the bottom. "position: absolute"',
        shortDescription: 'Ho to use "position: absolute" to keep a footer at a page bottom. Absoluttely stunnig!',
        jsx: <BottomFooterAbsolute/>,
        date: '22/11/2019',
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/footer/preview-image-2.png') ,
            alt: 'Keep footer at the bottom'
        }
    ]
    },
    {
        id: 3,
        url: '/footer-bottom-fixed/',
        title: 'Footer at the bottom. "position: fixed"',
        shortDescription: 'This text is shows how to train a footer stays in its place. Fix it!',
        jsx: <BottomFooterFixed/>,
        date: '23/11/2019',
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/footer/preview-image-3.png') ,
            alt: 'Keep footer at the bottom'
        }
    ]
    },
    {
        id: 4,
        url: '/let-const-var/',
        title: 'Let vs Const vs Var',
        shortDescription: "Why there are 3 words for declare a variable? What is the difference? Let's try to use them and find out.",
        jsx: <LetConstVarArticle />,
        images: [{
            id: 1,
            path: require('../../../assets/images/blog-page/articles/let-const-var/let-const-var-preview-img.png'),
            alt: 'Let vs Const vs Var'
        }]
    }
];

