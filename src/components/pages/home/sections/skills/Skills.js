import React from 'react';
import Section from '../Section';
import ParallaxImage from '../../../../ParallaxBackground';



export default function Skills(props) {
    const skillsContent = (
        <div>
            <div>AAAAA</div>
            <ParallaxImage classProp="parallax-about" />
        </div>

    );

    return (
        <Section sectionId="skills" name="Skills" content={skillsContent} />
    );

}


