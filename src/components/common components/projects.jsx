import React from 'react';
import "../../css/project.css";
const Project = (props) => {
    return ( 
        <div className='projdiv'>
            <img className='pic' src={props.image} alt="logo for the project"/>
            <div className='content'>
                <p>{props.title}</p>
                <p>{props.summary}</p>
                <p>{props.summary}</p>
            </div>
        </div>
     );
}
 
export default Project;