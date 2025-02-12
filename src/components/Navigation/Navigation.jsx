import { useState } from "react";
import { useAppContext } from "../../AppContext";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { GiEnvelope } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io5";
import './Navigation.css';

function Navigation() {
    const [active, setActive] = useState('FaHome');
    const [switchActive, setSwitchActive] = useState('FaHome');
    const { scrollToSection, homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef } = useAppContext();
    const switchButton = (view) => {
        setActive(view)
        setSwitchActive(view)
    };
    {switchActive}
       
    return (
        <div id='root-div'>
            <nav className='nav-bar'>
                <div className='img-container'>
                <img id='peter' src="/IMG_4299-cropped.jpg" alt="Peter" />
                <span id="name">Peter Felix</span>
                <span><span id="github-span"><a href="https://github.com/pfelix23" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}}><IoLogoGithub /></a></span>&nbsp;&nbsp;<span id="linkedIn-span"><a href="https://www.linkedin.com/in/peter-felix-3b038a174/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}}><TfiLinkedin /></a></span></span>
                </div>
                <div className='nav-links'>
                <span className={`${active === 'FaHome' ? 'active' : ''}`} onClick={() => {switchButton('FaHome'); scrollToSection(homeRef)}}><FaHome className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Home</span></span>
                <span className={`${active === 'FaUserTie' ? 'active' : ''}`} onClick={() => {switchButton('FaUserTie'); scrollToSection(aboutRef)}}><FaUserTie className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>About</span></span>
                <span className={`${active === 'FaBookReader' ? 'active' : ''}`} onClick={() => {switchButton('FaBookReader'); scrollToSection(skillsRef)}}><FaBookReader className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Skills</span></span>
                <span className={`${active === 'IoDocumentText' ? 'active' : ''}`} onClick={() => {switchButton('IoDocumentText'); scrollToSection(resumeRef)}}><IoDocumentText className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Resume</span></span>
                <span className={`${active === 'FaBook' ? 'active' : ''}`} onClick={() => {switchButton('FaBook'); scrollToSection(portfolioRef)}}><FaBook className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Portfolio</span></span>
                <span className={`${active === 'GiEnvelope' ? 'active' : ''}`} onClick={() => {switchButton('GiEnvelope'); scrollToSection(contactRef)}}><GiEnvelope className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Contact</span></span>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;