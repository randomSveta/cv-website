import React from 'react';

import BottomFooterMinHeight from './articles-text-components/footer-bottom/BottomFooterMinHeight';
import BottomFooterAbsolute from './articles-text-components/footer-bottom/BottomFooterAbsolute';
import BottomFooterFixed from './articles-text-components/footer-bottom/BottomFooterFixed';

import LetConstVarArticle from './articles-text-components/let-const-var/LetConstVarArticle';

export const ARTICLES = [
    {
        id: 1,
        url: '/footer-bottom-min-height/',
        title: 'Footer at the bottom. "min-height: 100vh"',
        shortDescription: 'Short content and a footer is "flying"? No problem, show the footer its place. Highest standard!',
        jsx: <BottomFooterMinHeight />,
        date: '21/11/2019',
        previewImg: {
            path: require('../../../assets/images/blog-page/articles/footer/100vh/preview-image-100vh.png')
        },
        initialPageImg: {
            path: require('../../../assets/images/blog-page/articles/footer/footer-initial-page.png'),
            alt: 'Initial page'
        }
    },
    {
        id: 2,
        url: '/footer-bottom-absolute/',
        title: 'Footer at the bottom. "position: absolute"',
        shortDescription: 'Ho to use "position: absolute" to keep a footer at a page bottom. Absoluttely stunnig!',
        jsx: <BottomFooterAbsolute />,
        date: '22/11/2019',
        previewImg: {
            path: require('../../../assets/images/blog-page/articles/footer/absolute/preview-image-absolute.png'),
        },
        initialPageImg: {
            path: require('../../../assets/images/blog-page/articles/footer/footer-initial-page.png'),
            alt: 'Initial page'
        }

    },
    {
        id: 3,
        url: '/footer-bottom-fixed/',
        title: 'Footer at the bottom. "position: fixed"',
        shortDescription: 'This text is shows how to train a footer stays in its place. Fix it!',
        jsx: <BottomFooterFixed />,
        date: '23/11/2019',
        previewImg: {
            path: require('../../../assets/images/blog-page/articles/footer/fixed/preview-image-fixed.png')
        },
        initialPageImg: {
            path: require('../../../assets/images/blog-page/articles/footer/footer-initial-page.png'),
            alt: 'Initial page'
        }
    },
    {
        id: 4,
        url: '/let-const-var/',
        title: 'Var vs Let/Const',
        shortDescription: "Why there are 3 words for declare a variable? What is the difference? Let's try to use them and find out.",
        jsx: <LetConstVarArticle />,
        previewImg: {
            path: require('../../../assets/images/blog-page/articles/let-const-var/let-const-var-preview.png')
        }
        ,
        initialPageImg: {
            path: require('../../../assets/images/blog-page/articles/let-const-var/let-const-var-initial-page.png'),
            alt: 'Initial page'
        }
    }

];

