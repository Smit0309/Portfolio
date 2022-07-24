import React from 'react'
import './style.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Smit Katara </span></h1>
        <h2>A Front End Devloper.</h2>
        <p className='desc'>I love the coding and apart from coding. I like to do travelling, Running and GYM, also my interest to learn new technologies and develop new things.</p>
        <div>
          <a href="https://github.com/Smit0309" className="btn btn-outline-primary mx-2" target={'blank'}><FaGithub/>Github</a>
          <a href="https://www.linkedin.com/in/smit-katara-775455246/" className="btn btn-outline-primary mx-2" target={'blank'}><FaLinkedin/>Linkedin </a>
        </div>
      </div>
    </>
  )
}
