import React from 'react';
import "../css/portfolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import banner from '../images/banner.jpg';
import snake from '../images/snakelogo.png';
import carcalc from '../images/carcalc.png';
import Project from './common components/projects';
import resume from '../images/resume.pdf';

const Portfolio = () => {


    return ( 
        <React.Fragment>
        <div id='Nav'>
            <ul className='nav-list'>
                <li className='float-left'><p className='name'>Dhruv Bahl</p></li>
                <li className='float-right'><a href="#Projects">Projects</a></li>
                <li className='float-right'><a href= {resume} >Resume</a></li>
            </ul>
        </div>

        <main className="container">
            <p>Hello 👋 I'm</p>
            <section className="animation">
                <div className="first"><div>Dhruv Bahl</div></div>
                <div className="second"><div>Web Developer</div></div>
                <div className="third"><div>New Grad</div></div>
            </section>
        </main>

        <div className='socials'>
            <ul className='socialUL'>
                <li className='socialList'><a href="https://twitter.com/flashdhruv"><FontAwesomeIcon className='fab' icon={faTwitter}/></a></li>
                <li className='socialList'><a href="https://www.linkedin.com/in/dhruv-bahl/"><FontAwesomeIcon className='fab' icon={faLinkedin}/></a></li>
                <li className='socialList'><a href="https://github.com/flashdhruv"><FontAwesomeIcon className='fab' icon={faGithub}/></a></li>
                <li className='socialList'><a href="https://www.youtube.com/channel/UC57_b2yP5EMEaff3quvNpyQ"><FontAwesomeIcon className='fab' icon={faYoutube}/></a></li>
            </ul>
        </div>

        <div className='banner'>
            <img className="banner" src={banner} alt="beautiful banner" />
        </div>

        <h2>About</h2>
        <div className='about'>
            <ul>
                <li>Hi, my name is Dhruv!</li>
                <li>Soon to be grad with a Bachelor's of Science in Computer Science. (May 2023)</li>
                <li>My aspirations for the future revolve around a role as a software developer with an energetic and diverse team. I would like the projects that I work on to have a positive impact on society and allow me to be creative.</li>
                <li>In my free time you can find me at the gym or cheering for Manchester united!</li>
            </ul>
        </div>

        <div className='projects' id='Projects'>
            <h2>Projects</h2>
            <Project 
            image={carcalc} 
            title="The Monthly Car Payment Calculator" 
            line1="The aim of the project was to understand React hooks."
            line2="It's an easy way to obtain and estimate for the monthly payments on a car."
            line3="The tech stack includes: React, HTML, CSS"
            link="https://flashdhruv.github.io/car_calc/"/>

            <Project 
            image={snake} 
            title="The Snake Game" 
            line1="The aim of the project was to practice OOP and GUI in Java in a more practical way."
            line2="The game follows the rules defined in the game that was available on old Nokia devices."
            line3="The tech stack  includes: Java"
            link="https://github.com/flashdhruv/Java-OOP-Snake"/>
        </div>

        </React.Fragment>
     );
}
 
export default Portfolio;