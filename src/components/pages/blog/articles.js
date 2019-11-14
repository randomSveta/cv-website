import React from 'react';

import BottomFooterArticle from './articles-text-components/BottomFooterArticle';
import LetConstVarArticle from './articles-text-components/LetsConstVarArticle';


export const ARTICLES = [
    {
        id: 1,
        url: '/place-footer-at-the-bottom/',
        title: 'Place Footer at the bottom',
        shortDescription: 'AAAA',
        jsx: <BottomFooterArticle/>
    },
    {
        id: 1,
        url: '/let-const-var/',
        title: 'Let vs Const vs Var',
        shortDescription: 'AAAA',
        jsx: <LetConstVarArticle/>
    }
];

