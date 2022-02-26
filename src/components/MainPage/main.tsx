import React from 'react';
import classes from './main.module.css';

function Main() {
    return (
      <div className={classes.main}>
        <div className={classes.intro}>
            <h1>Hi, I’m Anna. Nice to meet you.</h1>
            <ul>I've started my journey with programming back in 2019 at Sami Shamon Colleage of Engineering and this technologies
            that i can work with:
                <li>C and C++</li>
                <li>Java</li>
                <li>Web Development:JavaScript, TypeScript, React, Node Js , Express, Angular</li>
                <li>Python (About 3-year experience , include data science libraries)</li>
                <li>Design Patterns, Multithreading and Databases (SQL and NON-SQL)</li>
                <li>Familiar with Linux, cloud enviroments(dropbox)</li>
            </ul>
        </div>
      </div>
    );
    }

    export default Main;