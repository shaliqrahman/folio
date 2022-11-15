import "./HeroImageStyles.css"
import background from "../assets/bckimg.jpeg"
import { Link } from "react-router-dom"

import React from 'react'

function HeroImage() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={background} alt="BackImage" />
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE ENTHUSIAST</p>
            <h1>PYTHON DEVELOPER</h1>
            <div>
                <Link className="btn" to="/project">Project</Link>
                <Link className="btn btn-light" to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
} 

export default HeroImage 