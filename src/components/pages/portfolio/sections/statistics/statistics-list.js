import { SOCIAL_LINKS } from '../../../../social-icons/links/social-links';

export const STATISTICS = [
    {
        id: 1,
        profile: 'FreeCodeCamp',
        points: 630
    },
    {
        id: 2,
        profile: 'CodeWars',
        points: 373
    },
    {
        id: 3,
        profile: 'Codecademy',
        points: 647
    }
];

STATISTICS.forEach(statistic => {
    const profile = SOCIAL_LINKS.filter(socLink => statistic.profile === socLink.name)[0];
    if (profile) {
        statistic.url = profile.url;
        statistic.image = profile.image;
    }
})