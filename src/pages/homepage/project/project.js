import React from 'react'
import {FaGithub} from 'react-icons/fa'

const Project = ({projectItem}) => {
    const {name, description, skills, github} = projectItem;
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainers">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
                <a href={github} className="btn btn-outline-primary mx-2" target={'blank'}><FaGithub/>Demo</a>
            </span>            
        </div>
    )
}

export default Project
