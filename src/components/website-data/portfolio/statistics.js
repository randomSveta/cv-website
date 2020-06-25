import { SOCIAL_LINKS } from '../../website-data/social-links/social-links';

export const STATISTICS = [
    {
        id: 0,
        profile: 'FreeCodeCamp',
        points: 715
    },
    {
        id: 1,
        profile: 'CodeWars',
        points: 511
    },
    {
        id: 2,
        profile: 'Codecademy',
        points: 1068
    }
];

STATISTICS.forEach(statistic => {
    const profile = SOCIAL_LINKS.filter(socLink => statistic.profile === socLink.name)[0];
    if (profile) {
        statistic.url = profile.url;
        statistic.image = profile.image;
    }
})