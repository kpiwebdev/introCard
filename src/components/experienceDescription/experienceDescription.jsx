import React from 'react';
import classes from './experienceDescription.module.css';

const ExperienceDescription = () => {
    return (
        <div className="wrapper">
            <h2>Experience description</h2>
            <h3>Frontend</h3>
            <ul className={classes.myList}>
                <li>JSP</li>
                <li>Razor</li>
                <li>React with JS <span className={classes.aBit}>(a bit)</span></li>
            </ul>

            <h3>Backend</h3>
            <ul className={classes.myList}>
                <li>ASP.NET CORE WEBAPI</li>
                <li>Express.js <span className={classes.aBit}>(a bit)</span></li>
                <li>Java Spring</li>
            </ul>
        </div>
    );
};

export default ExperienceDescription;