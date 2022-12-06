import React from 'react';
import "../css/portfolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import banner from '../images/banner.jpg';
import vette from '../images/vette.jpg';
import Project from './common components/projects';

const Portfolio = () => {

    const summary  = `some stuff
    and tex
    and more text`;

    return ( 
        <React.Fragment>
        <div id='Nav'>
            <ul className='nav-list'>
                <li className='float-left'><p className='name'>Dhruv Bahl</p></li>
                <li className='float-right'><a href="#Projects">Projects</a></li>
                <li className='float-right'><a href="#Resume">Resume</a></li>
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

        <div className='projects' id='Projects'>
            <h2>Projects</h2>
            <Project 
            image={banner} 
            title="A project Title" 
            summary={summary}/>

            <Project 
            image={vette} 
            title="Another project" 
            summary={summary}/>
        </div>

        </React.Fragment>
     );
}
 
export default Portfolio;