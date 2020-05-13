import React from 'react';

import About from '../.././pages/home/sections/about/About'
import Skills from '../../pages/home/sections/skills/Skills';
import CurrentProjects from '../../pages/home/sections/current-projects/CurrentProjects';

import CodePenProjects from '../../pages/portfolio/sections/codepen-projects/CodePenProjects';
import Statistics from '../../pages/portfolio/sections/statistics/Statistics';
import GitHubProjects from '../../pages/portfolio/sections/github-projects/GitHubProjects';

import ProjectsHistoryTable from '../../pages/projects-history/projects-table/ProjectsHistoryTable';
import CertificatesTable from '../../pages/projects-history/certificates/CertificatesTable';

import Articles from '../../pages/blog/Articles';


export const SECTIONS_HOME = [
    {
        id: 0,
        name: 'About',
        hashUrl: '#about',
        jsx: <About />
    },
    {
        id: 1,
        name: 'Skills',
        hashUrl: '#skills',
        jsx: <Skills />
    },
    {
        id: 2,
        name: 'Current Projects',
        hashUrl: '#current-projects',
        jsx: <CurrentProjects />

    }
];

export const SECTIONS_PORTFOLIO = [
    {
        id: 0,
        name: 'Statistics',
        hashUrl: '#statistics',
        jsx: <Statistics />
    },
    {
        id: 1,
        name: 'GitHub',
        hashUrl: '#github',
        jsx: <GitHubProjects />
    },
    {
        id: 2,
        name: 'CodePen',
        hashUrl: '#codepen',
        jsx: <CodePenProjects />


    }
];

export const SECTIONS_BLOG = [
    {
        id: 0,
        name: 'Articles',
        hashUrl: '#articles',
        jsx: <Articles sectionUrl='/blog' />
    }
];

export const SECTIONS_PROJECTS_HISTORY = [
    {
        id: 0,
        name: 'Projects History',
        hashUrl: '#projects',
        jsx: <ProjectsHistoryTable />
    },
    {
        id: 1,
        name: 'Certificates',
        hashUrl: '#certificates',
        jsx: <CertificatesTable />
    }
];
