import React from 'react';
import Section from '../../../Section';
import ProjectsCarousel from './ProjectsCarousel';

export default function CurrentProjects(props) {
    const projectsContent = (
<ProjectsCarousel />
    );

    return (
        <Section sectionId="current-projects" name="Current Projects" content={projectsContent} />
    );

}


