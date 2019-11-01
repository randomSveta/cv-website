import React from 'react';
import About from '../.././pages/home/sections/about/About'
import Skills from '../../pages/home/sections/skills/Skills';
import CurrentProjects from '../../pages/home/sections/current-projects/CurrentProjects';

export const LINKS = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'CV',
        url: '/cv'
    },
    {
        id: 3,
        name: 'Certificates',
        url: '/certificates'

    },
    {
        id: 4,
        name: 'Projects',
        url: '/projects'
    },
    {
        id: 5,
        name: 'Blog',
        url: '/blog'
    }
]

export const HASH_HOME = [
    {
        id: 1,
        name: 'About',
        hashUrl: '#about',
        jsx: <About/>
    },
    {
        id: 2,
        name: 'Skills',
        hashUrl: '#skills',
        jsx: <Skills/>
    },
    {
        id: 3,
        name: 'Current Projects',
        hashUrl: '#current-projects',
        jsx: <CurrentProjects/>
        
    }
];

export const HASH_CERTIFICATES = [
    {
        id: 1,
        name: 'Web Development',
        hashUrl: '#web-development'
    },
    {
        id: 2,
        name: 'Testing',
        hashUrl: '#testing'
    },
    {
        id: 3,
        name: 'Graphic Design',
        hashUrl: '#design'
        
    }
];

export const HASH_PROJECTS = [
    {
        id: 1,
        name: 'Statistics',
        hashUrl: '#statistics',
        jsx: <div/>
    },
    {
        id: 2,
        name: 'CodePen',
        hashUrl: '#codepen',
        jsx: <div/>
    },
    {
        id: 3,
        name: 'GitHub',
        hashUrl: '#github',
        jsx: <div/>
        
    }
];

