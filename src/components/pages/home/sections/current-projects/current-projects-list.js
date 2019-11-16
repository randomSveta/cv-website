import { faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCode } from '@fortawesome/free-solid-svg-icons';

export const CURRENT_PROJECTS = [
    {
        id: 1,
        title: 'Calculator',
        icon: faFreeCodeCamp,
        description: 'There is a "Calculator" project in the course "Front  End Libraries Certification" on the FreeCodeCamp website',
        taskLink: 'https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator',
        projectLink: 'https://codepen.io/randomsveta/pen/VwwPjLK',
        progress: 1
    },
    {
        id: 2,
        title: 'Hotel Website',
        icon: faGithub,
        description: 'Project to practice React, Bootstrap, Reactstrap etc. I have decided to create a website for the invented/unreal Hotel chain, where an user could choose the city, book a room and find availible options. I am also going to use Mongo DB to store data for the rooms and search.',
        taskLink: 'https://github.com/randomSveta/HotelSite',
        projectLink: 'https://randomsveta.github.io/HotelSite/',
        progress: 22
    },
    {
        id: 3,
        title: 'CodeWars 50 tasks',
        icon: faTerminal,
        description: 'I have decided to complite 50 task on CodeWars website starting from th1 1th of December. I have 333 points already and going to practice JavaScript skills further',
        taskLink: 'https://www.codewars.com/dashboard',
        projectLink: 'https://www.codewars.com/dashboard',
        progress: 0
    },
    {
        id: 4,
        title: 'Codecademy PHP course',
        icon: faCode,
        description: 'One more skill to study and understand',
        taskLink: 'https://www.codecademy.com/learn/learn-php',
        projectLink: 'https://www.codecademy.com/learn/learn-php',
        progress: 5 
    }
]