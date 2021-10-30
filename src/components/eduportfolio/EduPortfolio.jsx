import React from 'react'
import Navbar from './navbar/Navbar'
import './eduportfolio.css';
import Socialsbar from './socialsbar/Socialsbar';
import Landing from './landing/Landing';
import About from './about/About';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowCircleUp } from 'react-icons/fa';
import Projects from './projects/Projects';


const EduPortfolio = () => {
    return (
        <>
            <div className="eduportfolio-screen">
                <ScrollToTop smooth component={<FaArrowCircleUp className="scrollbtn"/>}/>
                <Navbar/> 
                <Socialsbar/>
                <Landing/>
                <About/>
                <Projects/>
            </div>
        </>
    )
}

export default EduPortfolio
