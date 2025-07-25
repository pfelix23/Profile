import { useState, useEffect } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { GiEnvelope } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useAppContext } from "../../AppContext";
import { FaArrowCircleUp } from "react-icons/fa";
import './Profile.css';

function Profile() {
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState('All');
    const [isActive, setIsActive] = useState('All');
    const types = ['full-stack', 'back-end', 'front-end'];
    const AllPics = ['Screenshot 2025-02-04 133658.png','Screenshot 2025-02-04 133716.png','Screenshot 2025-02-04 133746.png','Screenshot 2025-02-04 133805.png','Screenshot 2025-02-04 132501.png','Screenshot 2025-02-04 132437.png','Screenshot 2025-02-04 132605.png', 'Screenshot 2025-02-04 132735.png', 'Screenshot 2025-02-04 133300.png','Screenshot 2025-02-04 133429.png','Screenshot 2025-02-04 133451.png','Screenshot 2025-02-04 133535.png'];
    const EquiTrackPics = ['Screenshot 2025-02-04 133658.png','Screenshot 2025-02-04 133716.png','Screenshot 2025-02-04 133746.png','Screenshot 2025-02-04 133805.png'];
    const ElitebnbPics = ['Screenshot 2025-02-04 132501.png','Screenshot 2025-02-04 132437.png','Screenshot 2025-02-04 132605.png', 'Screenshot 2025-02-04 132735.png'];
    const FluxPics = ['Screenshot 2025-02-04 133300.png','Screenshot 2025-02-04 133429.png','Screenshot 2025-02-04 133451.png','Screenshot 2025-02-04 133535.png'];
    const mBoldenPics = ['Screenshot 2025-06-10 121855.png', 'Screenshot 2025-06-10 121921.png', 'Screenshot 2025-06-10 121954.png', 'Screenshot 2025-06-10 122026.png'];
    const { homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef, scrollToSection } = useAppContext();
    const [showArrow, setShowArrow] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        
        setShowArrow(!entry.isIntersecting && window.innerWidth <= 768);
        },
        {
        root: null,
        threshold: 0.1,
        }
    );

    if (homeRef?.current) {
        observer.observe(homeRef.current);
    }

    return () => {
        if (homeRef?.current) observer.unobserve(homeRef.current);
    };
    }, [homeRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex +1) % types.length)
        }, 1600);
        return () => clearInterval(interval)
    }, [types.length]);


    const display = () => {
        if(isActive === 'All') {
            return AllPics
        } else if (isActive === 'Elite') {
            return ElitebnbPics
        } else if  (isActive === 'Flux') {
            return FluxPics
        } else if (isActive === 'EquiTrack') {
            return EquiTrackPics
        } else if (isActive === 'mBolden-Change') {
            return mBoldenPics
        }
    };


    return (
        <div className='root'>
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
            <p style={{fontStyle:'italic', fontSize:'16px', lineHeight:'1.4', paddingRight:'5px'}}>I am currently open to work. Please check out my contact info if you would like to reach out for any opportunities.</p>
            <div className='contact'>
            <span style={{lineHeight:'1.4', paddingRight:'5px'}}>After a long and successful career in sales, I found myself falling out of love with the work. While I had always held a passing interest in coding, it wasn&apos;t until I decided to enter my coding academy that I truly fell in love with it. The process of learning how to code was both challenging and exciting, and the more I dove into it, the more I found myself captivated. Each new concept felt like unlocking a new layer of creativity, and it quickly became clear to me that this was where my passion truly lies.</span>
            </div>
            <p style={{lineHeight:'1.4', paddingRight:'5px'}}>I specialize in JavaScript, and Python, with React being my preferred frontend framework. Keeping a level head is my approach when working with teams of developers, as programming can become stressful at times. I&apos;m not at all afraid to dig into the unknown and challenge myself, and I am comfortable working wherever I&apos;m needed.</p>
            </div>
            </div>
            </div>
            <div style={{backgroundColor:'#f8f9fa'}} ref={skillsRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Skills</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'16px', color:'#3e3f41', paddingRight:'5px'}}>My diverse skill set in software development has been honed through extensive hands-on experience and continuous learning. These skills enable me to deliver high-quality, innovative solutions in dynamic work environments. Key competencies include:</p>
            <div style={{display: 'flex', flexDirection:'row', marginLeft:'2%'}}> 
            <div style={{display: 'flex', flexDirection:'column', width:'47%', marginRight:'4%'}}><span className='underline-95'>JAVASCRIPT <span>95%</span></span><span className='underline-95'>EXPRESS <span>95%</span></span><span className='underline-90'>HTML <span>90%</span></span><span className='underline-95'>CSS <span>95%</span></span><span className='underline-95'>NODE.JS <span>95%</span></span><span className='underline-85'>AWS S3 <span>85%</span></span><span className='underline-85'>ALEMBIC <span>85%</span></span><span className='underline-90'>SEQUELIZE <span>90%</span></span></div>
            <div style={{display: 'flex', flexDirection:'column', width:'47%'}}><span className='underline-90'>REACT <span>90%</span></span><span className='underline-85'>PYTHON <span>85%</span></span><span className='underline-90'>SQL <span>90%</span></span><span className='underline-85'>FLASK <span>85%</span></span><span className='underline-90'>REDUX <span>90%</span></span><span className='underline-90'>POSTGRESQL <span>90%</span></span><span className='underline-90'>CHART.JS <span>90%</span></span><span className='underline-85'>SQLALCHEMY <span>85%</span></span></div>
            </div>
            </div>
            <div className='resume-section' ref={resumeRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Resume</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>Software Engineer with experience developing full-stack web applications. Specialized in full-stack/front-end/back-end development, dedicated to creating polished, efficient solutions that meet business needs and enhance user experiences.</p>
            <div style={{display: 'flex', flexDirection:'row', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif'}}><div style={{display: 'flex', flexDirection:'column', width:'46%', marginRight:'4%'}}><span><h3 className='summary half-underline'>Summary</h3><h3>Peter Felix</h3><p style={{lineHeight:'1.4', color:'#3e3f41'}}>Dynamic and deadline-oriented Full Stack Software Engineer with experience designing and delivering user-centered digital solutions from inception to refined execution. <p style={{fontWeight:'bold'}}>Github Links Below:</p>
             ● <a href="https://github.com/pfelix23/EquiTrack" target="_blank" rel="noreferrer" className='github'>EquiTrack</a>
            <br /> <br /> ● <a href="https://github.com/pfelix23/Elitebnb" target="_blank" rel="noreferrer" className='github'>Elitebnb</a>
            <br /> <br /> ● <a href="https://github.com/pfelix23/Flux_P" target="_blank" rel="noreferrer" className='github'>Flux</a>
            <br /> <br /> ● <a href="https://drive.google.com/file/d/16yefXAsLdPwQEP1wF8YHDvfm6_fPoy5-/view?usp=sharing" target="_blank" rel="noreferrer" className='resume'>Resume PDF</a></p></span><span><h3>Education Full Stack Software Engineering</h3><p style={{lineHeight:'1.4', color:'#3e3f41'}}>App Academy, San Francisco, CA <br /><br />
            Studied and gained hands on experience in computer science, web development, and software engineering. Planned, developed, and deployed full-stack projects in both group and individual work settings. Gained daily experience using common programming languages with attention to modern development methodologies such as Object-Oriented-Programming. Technologies learned: Javascript, Python, React, SQL & NoSQL, Express and PostgreSQL.</p></span></div><div style={{display: 'flex', flexDirection:'column', width:'46%'}}><span><h2 className='half-underline'>Projects</h2><p style={{lineHeight:'1.4', color:'#3e3f41'}}><h4 style={{color:'black', marginBottom:'-5px'}}>EquiTrack</h4> 
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p> <p>The application utilizes (PostgreSQL, Express.js, React, Node, Chart.js). The goal was to create a financial platform that could track your assets/finances, give recommendations and predict investments.</p></span>
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p><p>EquiTrack utilizes Chart.js for dynamic visualizations of financial metrics with descriptive insights.</p> </span>
           <h4 style={{color:'black', marginBottom:'-5px'}}>Elitebnb</h4> 
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p>	<p>This application utilizes (PostgreSQL, Express.js, React, Node). The goal was to replicate the user experience and design of Airbnb while leveraging modern technologies and adhering to industry best practices.</p></span>
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p>	<p>Elitebnb Integrates React and Redux to create a smooth, seamless user experience.</p></span>
            <h4 style={{color:'black', marginBottom:'-5px'}}>Flux</h4>  
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p>	<p>The application utilizes (PostgreSQL, Flask(Python), React, Node, AWS S3). The goal was to create a social networking platform where users could like, share, comment on and upload pictures, while following friends.</p></span>
            <span style={{display:'flex'}}><p style={{ marginRight:'10px'}}>●</p>	<p>Leverages AWS S3 for image storage, allowing users to upload and manage media from their devices.</p></span>
            </p></span></div>
            </div>
            </div>
            <div style={{backgroundColor:'#f8f9fa'}} ref={portfolioRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Portfolio</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41', paddingRight:'5px'}}>Welcome to my portfolio! Below, you&apos;ll find a curated selection of snapshots showcasing some of the projects I&apos;ve worked on recently. Each project highlights my skills in full stack development, illustrating my expertise in both front-end and back-end technologies. Completely innovative web applications and dynamic websites , these examples demonstrate my ability to design, develop, and deploy user-centric solutions. <br /> <br />
            Feel free to explore the various projects to get a better understanding of my work process, the challenges I tackled, and the creative solutions I implemented.</p>
            <div className='portfolio-container'><div className='portfolio-div'><span className={`${active === 'All'? 'active' : ''}`} onClick={() => {setActive('All'); setIsActive('All')}}>All</span><span className={`${active === 'EquiTrack'? 'active' : ''}`} onClick={() => {setActive('EquiTrack'); setIsActive('EquiTrack')}}>EquiTrack</span><span className={`${active === 'Elitebnb'? 'active' : ''}`} onClick={() => {setActive('Elitebnb'); setIsActive('Elite')}}>Elitebnb</span><span className={`${active === 'Flux'? 'active' : ''}`} onClick={() => {setActive('Flux'); setIsActive('Flux')}}>Flux</span><span className={`${active === 'mBolden-Change'? 'active' : ''}`} onClick={() => {setActive('mBolden-Change'); setIsActive('mBolden-Change')}}>mBolden-Change</span></div></div>
            <section className='picture-section'>
            <div className='elite-card'>
            {display().map(((all, index) => {
                let href;
                {if(all === 'Screenshot 2025-02-04 133658.png' || all === 'Screenshot 2025-02-04 133716.png' || all === 'Screenshot 2025-02-04 133746.png' || all === 'Screenshot 2025-02-04 133805.png'){
                    href = 'https://equitrack-5ecf.onrender.com'
                } else if (all === 'Screenshot 2025-02-04 132501.png' || all === 'Screenshot 2025-02-04 132437.png' || all === 'Screenshot 2025-02-04 132605.png' || all === 'Screenshot 2025-02-04 132735.png'){
                    href = 'https://elitebnb-vwec.onrender.com'
                } else if (all === 'Screenshot 2025-02-04 133300.png' || all === 'Screenshot 2025-02-04 133429.png' || all === 'Screenshot 2025-02-04 133451.png' || all === 'Screenshot 2025-02-04 133535.png'){
                    href = 'https://flux-p.onrender.com'
                } else if (all === 'Screenshot 2025-06-10 121855.png' || all === 'Screenshot 2025-06-10 121921.png' || all === 'Screenshot 2025-06-10 121954.png' || all === 'Screenshot 2025-06-10 122026.png'){
                    href = 'https://www.mboldenchange.org/'
                }
                return(<picture  className='elite-section' key={index}>
                <a href={href} target="_blank" rel="noreferrer">
                <img className='elites' src={all}
                alt={'AllPics'}
                 />
                 </a>
            </picture>)}
            }))}
            </div>
            </section>
            </div>
            <div ref={contactRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Contact</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>If you would like to schedule time to meet with me, please feel free to reach out via email or phone. Additionally, I can set up a time to go over any project demos as well.</p>
            <div className='icons'><span style={{display:'flex', marginTop:'3%'}}><SlLocationPin className='contact-icon'/>&nbsp;<span>Location: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>New York, NY</span></span></span><span style={{display:'flex'}}><GiEnvelope className='contact-icon'/>&nbsp;<span>Email: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>peter.felix23@gmail.com</span></span></span><span style={{display:'flex'}}><IoPhonePortraitOutline className='contact-icon'/>&nbsp;<span>Call: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>+1 (718) 736-3969</span></span></span>
                  </div>
            </div>   
            {showArrow && (
            <div className='home' onClick={() => scrollToSection(homeRef)}>
                <FaArrowCircleUp className='arrow' />
            </div>
            )}
        </div>
    )
}

export default Profile;