import React from 'react';

import About from '../.././pages/home/sections/about/About'
import Skills from '../../pages/home/sections/skills/Skills';
import CurrentProjects from '../../pages/home/sections/current-projects/CurrentProjects';

import CodePenProjects from '../../pages/portfolio/sections/codepen-projects/CodePenProjects';
import Statistics from '../../pages/portfolio/sections/statistics/Statistics';
import GitHubProjects from '../../pages/portfolio/sections/github-projects/GitHubProjects';

export const SECTIONS_HOME = [
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

export const SECTIONS_CERTIFICATES = [
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

export const SECTIONS_PORTFOLIO = [
    {
        id: 1,
        name: 'Statistics',
        hashUrl: '#statistics',
        jsx: <Statistics/>
    },
    {
        id: 2,
        name: 'CodePen',
        hashUrl: '#codepen',
        jsx: <CodePenProjects />
    },
    {
        id: 3,
        name: 'GitHub',
        hashUrl: '#github',
        jsx: <GitHubProjects/>
        
    }
];
