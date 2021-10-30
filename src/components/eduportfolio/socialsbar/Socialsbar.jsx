import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './socialsbar.css'

const Socialsbar = () => {
    return (
        <div className="socials-bar">
            <ul className="social-buttons">
                <li className="social-icon">
                    <a className="icon-button" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shreyasbrao/"><FaInstagram/></a>
                </li>
                <li className="social-icon">
                    <a className="icon-button" target="_blank" rel="noopener noreferrer" href="https://github.com/chechu301001"><FaGithub/></a>
                </li>
                <li className="social-icon">
                    <a className="icon-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shreyas-b-rao-360296206/"><FaLinkedin/></a>
                </li>
            </ul>
        </div>
    )
}

export default Socialsbar
