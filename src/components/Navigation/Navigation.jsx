import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { GiEnvelope } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { SiRefinedgithub } from "react-icons/si";
import './Navigation.css';

function Navigation() {
    const [active, setActive] = useState('FaHome');
    const [switchActive, setSwitchActive] = useState('FaHome');
    const navigate = useNavigate();
    const { scrollToSection, homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef, visible, setVisible } = useAppContext();
    const switchButton = (view) => {
        setActive(view)
        setSwitchActive(view)
    };
    {switchActive}
       
    return (
        <div className={`root-div ${visible ? 'nav-open': 'nav-close'}`}>
            <nav className='nav-bar'>
                <div className='img-container'>
                <img id='peter' src="/IMG_4299-cropped.jpg" alt="Peter" />
                <span id="name">Peter Felix</span>
                <span><span id="github-span"><a href="https://github.com/pfelix23" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}}><SiRefinedgithub style={{marginBottom:-2.6}} /></a></span>&nbsp;&nbsp;<span id="linkedIn-span"><a href="https://www.linkedin.com/in/peter-felix-3b038a174/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}}><TfiLinkedin style={{marginBottom:-1}} /></a></span></span>
                </div>
                <div className='nav-links'>
                <span className={`${active === 'FaHome' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('FaHome'); setVisible(!visible); setTimeout(() => {scrollToSection(homeRef)}, 50)}}><FaHome className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Home</span></span>
                <span className={`${active === 'FaUserTie' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('FaUserTie'); setVisible(!visible); setTimeout(() => {scrollToSection(aboutRef)}, 50)}}><FaUserTie className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>About</span></span>
                <span className={`${active === 'FaBookReader' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('FaBookReader'); setVisible(!visible); setTimeout(() => {scrollToSection(skillsRef)}, 50)}}><FaBookReader className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Skills</span></span>
                <span className={`${active === 'IoDocumentText' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('IoDocumentText'); setVisible(!visible); setTimeout(() => {scrollToSection(resumeRef)}, 50)}}><IoDocumentText className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Resume</span></span>
                <span className={`${active === 'FaBook' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('FaBook'); setVisible(!visible); setTimeout(() => {scrollToSection(portfolioRef)}, 50)}}><FaBook className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Portfolio</span></span>
                <span className={`${active === 'GiEnvelope' ? 'active' : ''}`} onClick={() => {navigate('/'); switchButton('GiEnvelope'); setVisible(!visible); setTimeout(() => {scrollToSection(contactRef)}, 50)}}><GiEnvelope className="icon"/>&nbsp;&nbsp;<span style={{fontSize:'17px'}}>Contact</span></span>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;