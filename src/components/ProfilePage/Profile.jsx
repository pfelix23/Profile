import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { GiEnvelope } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useAppContext } from "../../AppContext";
import './Profile.css';

function Profile() {
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState('All');
    const types = ['full-stack', 'back-end', 'front-end'];
    const ElitebnbPics = ['/Screenshot 2025-02-04 002234.png', 'Screenshot 2025-02-04 002338.png','Screenshot 2025-02-04 002401.png', 'Screenshot 2025-02-04 002452.png']

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex +1) % types.length)
        }, 1600);
        return () => clearInterval(interval)
    }, [types.length]);

    const { homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef } = useAppContext();


    return (
        <div style={{overflowY:'scroll', position:'relative'}}>
            <div ref={homeRef}>
            <h1>Peter Felix <p>I do <span style={{textDecoration: 'underline #20A4F3'}}>{types[index]}</span> engineering.</p></h1>
            <img src="/wallpapersden.com_76453-3840x2160.jpg" alt="wallPaper" className='backGround'/>
            </div>
            <div ref={aboutRef} className='About-div'><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>About</h2>
            <p style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'19px', color:'grey'}}>Full Stack Software Engineer. Ready to tackle new challenges!</p>
            <div className='about-content'>
            <img className='my-image' src="/IMG_4299-cropped.jpg" alt="" />
            <div className='info-text-container'>
            <h3 style={{fontSize:'26px', color: 'rgb(23, 107, 155)'}}>Web Developer.</h3>
            <p style={{fontStyle:'italic', fontSize:'16px', lineHeight:'1.4'}}>I am currently open to work. Please check out my contact info if you would like to reach out for any opportunities.</p>
            <div className='contact'>
            <div className='info-div'><span><MdArrowForwardIos style={{fontSize: '13px', color:'#20A4F3'}} /> &nbsp;<span style={{fontWeight:'bold'}}>Phone:</span> +1 (718) 736-3969 </span> <br /> <span><MdArrowForwardIos style={{fontSize: '13px', color:'#20A4F3'}} /> &nbsp;<span style={{fontWeight:'bold'}}>City:</span> New York, NY</span></div>
            <div className='info-div'><span><MdArrowForwardIos style={{fontSize: '13px', color:'#20A4F3'}} /> &nbsp;<span style={{fontWeight:'bold'}}>Email:</span> peter.felix23@gmail.com</span> <br /> <span><MdArrowForwardIos style={{fontSize: '13px', color:'#20A4F3'}} /> &nbsp;<span style={{fontWeight:'bold'}}>FullTime:</span> Available</span></div>
            </div>
            <p style={{lineHeight:'1.4'}}>I specialize in JavaScript, and Python, with React being my preferred frontend framework. Keeping a level head is my approach when working with teams of developers, as programming can become stressful at times. I&apos;m not at all afraid to dig into the unknown and challenge myself, and I am comfortable working wherever I&apos;m needed.</p>
            </div>
            </div>
            </div>
            <div ref={skillsRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Skills</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'16px', color:'#3e3f41'}}>My diverse skill set in software development has been honed through extensive hands-on experience and continuous learning. These skills enable me to deliver high-quality, innovative solutions in dynamic work environments. Key competencies include:</p>
            <div style={{display: 'flex', flexDirection:'row', marginLeft:'2%'}}> 
            <div style={{display: 'flex', flexDirection:'column', width:'47%', marginRight:'4%'}}><span className='underline'>JAVASCRIPT <span>100%</span></span><span className='underline'>CSS <span>100%</span></span><span className='underline'>HTML <span>100%</span></span></div>
            <div style={{display: 'flex', flexDirection:'column', width:'47%'}}><span className='underline'>REACT <span>100%</span></span><span className='underline'>PYTHON <span>100%</span></span><span className='underline'>SQL <span>100%</span></span></div>
            </div>
            </div>
            <div ref={resumeRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Resume</h2>

            </div>
            <div ref={portfolioRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Portfolio</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>Welcome to my portfolio! Below, you'll find a curated selection of snapshots showcasing some of the projects I've worked on recently. Each project highlights my skills in full stack development, illustrating my expertise in both front-end and back-end technologies. Completely innovative web applications and dynamic websites , these examples demonstrate my ability to design, develop, and deploy user-centric solutions. <br /> <br />
            Feel free to explore the various projects to get a better understanding of my work process, the challenges I tackled, and the creative solutions I implemented.</p>
            <div className='portfolio-container'><div className='portfolio-div'><span className={`${active === 'All'? 'active' : ''}`} onClick={() => setActive('All')}>All</span><span className={`${active === 'Elitebnb'? 'active' : ''}`} onClick={() => setActive('Elitebnb')}>Elitebnb</span><span className={`${active === 'Flux'? 'active' : ''}`} onClick={() => setActive('Flux')}>Flux</span><span className={`${active === 'EquiTrack'? 'active' : ''}`} onClick={() => setActive('EquiTrack')}>EquiTrack</span></div></div>
            <section className='picture-section'>
            <div className='elite-card'>
            {ElitebnbPics.map(((elite, index) => {
                return(<picture  className='elite-section' key={index}>
                <img className='elites' src={elite}
                alt={'Elitebnb'}
                 />
            </picture>)
            }))}
            </div>
            </section>
            </div>
            <div ref={contactRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Contact</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>If you would like to schedule time to meet with me, please feel free to reach out via email or phone. Additionally, I can set up a time to go over any project demos as well.</p>
            <div className='icons'><span style={{display:'flex', marginTop:'3%'}}><SlLocationPin className='contact-icon'/>&nbsp;<span>Location: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>New York, NY</span></span></span><span style={{display:'flex'}}><GiEnvelope className='contact-icon'/>&nbsp;<span>Email: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>peter.felix23@gmail.com</span></span></span><span style={{display:'flex'}}><IoPhonePortraitOutline className='contact-icon'/>&nbsp;<span>Call: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>+1(718)736-3969</span></span></span></div>
            </div>              
        </div>
    )
}

export default Profile;