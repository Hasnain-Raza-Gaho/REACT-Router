import React from 'react';
import {useLocation} from 'react-router-dom';

const About = () => {
    const loc = useLocation();
    console.log(loc)
    return (
        <div>
            <h1>My Name is {loc.state.name}</h1>
            <p>I read in class {loc.state.classs}</p>
            <p>I am Learning {loc.state.course} in Saylani</p>
        </div>
    );
}

export default About;
