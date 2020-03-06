import React, { useState } from 'react';
import '../../css/main.css';

const Professional: React.FC = () => {

    return (
        <div className="content about">
            <h2>What have I been doing in Tech?</h2>
            <p>As a self taught Front End Developer, for the past 7 years, I've been fortunate enough to work at companies just starting out to companies that have an established consumer base. Creating ecommerce sites for well known music artists to compelling investor relations sites. From ground up builds to redesigns to restructuring development processes entirely. Working in both small development teams and large. Developing sites while also being the project manager to building scalable/mobile friendly sites.</p>
            {/* <p>In my career I strive to find work that puts focus on accessibility and tech for social good. With a passion for WCAG compliance/mobile first/TDD sites - I have obtained the skills listed below.</p> */}
            <ul>
                <li>Sass/Less</li>
                <li>Javascript/Typescript/React/jQuery/PHP/VueJS</li>
                <li>Foundation/Bulma/Bootstrap</li>
                <li>Jest/Mocha</li>
                <li>Firebase/AWS</li>
            </ul>
        </div>
    );
}

export default Professional;