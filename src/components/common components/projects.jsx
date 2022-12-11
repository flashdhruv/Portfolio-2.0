import React from 'react';
import "../../css/project.css";
const Project = (props) => {

    const handleClick = (url) => {
        window.location.href = url;
    }

    return ( 
        <div className='projdiv' onClick={() => handleClick(props.link)}>
            <img className='pic' src={props.image} alt="logo for the project"/>
            <div className='content'>
                <h3>{props.title}</h3>
                <p>{props.line1}</p>
                <p>{props.line2}</p>
                <p>{props.line3}</p>
            </div>
        </div>
     );
}
 
export default Project;