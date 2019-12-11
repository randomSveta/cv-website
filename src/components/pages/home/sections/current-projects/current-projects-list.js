import { faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCode, faBook } from '@fortawesome/free-solid-svg-icons';

export const CURRENT_PROJECTS = [
    {
        id: 1,
        title: 'Calculator',
        icon: faFreeCodeCamp,
        description: 'There is a "Calculator" project in the course "Front  End Libraries Certification" on the FreeCodeCamp website',
        repoLink: '',
        taskLink: 'https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator',
        projectLink: 'https://codepen.io/randomsveta/pen/VwwPjLK',
        progress: 20
    },
    {
        id: 2,
        title: 'Hotel Website',
        icon: faGithub,
        description: 'Project to practice React, Bootstrap, Reactstrap etc. I have decided to create a website for the invented/unreal Hotel chain, where an user could choose the city, book a room and find availible options. I am also going to use Mongo DB to store data for the rooms and search.',
        repoLink: 'https://github.com/randomSveta/HotelSite',
        taskLink: '',
        projectLink: 'https://randomsveta.github.io/HotelSite/',
        progress: 22
    },
    {
        id: 3,
        title: 'CodeWars 50 tasks',
        icon: faTerminal,
        description: 'I have decided to complite 50 task on CodeWars website starting from th1 1th of December. I have 333 points already and going to practice JavaScript skills further',
        repoLink: '',
        taskLink: 'https://www.codewars.com/dashboard',
        projectLink: '',
        progress: 12
    },
    {
        id: 4,
        title: 'Codecademy PHP course',
        icon: faCode,
        description: 'One more skill to study and understand',
        repoLink: '',
        taskLink: 'https://www.codecademy.com/learn/learn-php',
        projectLink: '',
        progress: 10
    },
    {
        id: 5,
        title: 'My portfolio website',
        icon: faGithub,
        description: 'I am creating a portfolio website to show all information about me and my skills. Looking forward to find a job!',
        repoLink: 'https://github.com/randomSveta/my-website',
        taskLink: '',
        projectLink: 'https://randomsveta.github.io/my-website/',
        progress: 70
    },
    {
        id: 6,
        title: 'JavaScript tutorial',
        icon: faTerminal,
        description: 'Studying JS for better understanding',
        repoLink: '',
        taskLink: 'https://javascript.info/',
        projectLink: '',
        progress: 10
    },
    {
        id: 7,
        title: "You Don't Know JS",
        icon: faTerminal,
        description: 'Reading a very important book to find out more about JavaScript',
        repoLink: '',
        taskLink: 'https://github.com/getify/You-Dont-Know-JS/',
        projectLink: '',
        progress: 10
    },
    {
        id: 8,
        title: "Let vs Var vs Const",
        icon: faBook,
        description: 'I am writing an article aboute 3 important keywords to declare variables',
        repoLink: '',
        taskLink: './blog/let-const-var/',
        projectLink: '',
        progress: 10
    }
]