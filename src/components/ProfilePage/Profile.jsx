import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { GiEnvelope } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useAppContext } from "../../AppContext";
import { FaArrowCircleUp } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { VscDash } from "react-icons/vsc";
import './Profile.css';

function Profile() {
    const [text, setText] = useState('');
    const [typeIndex, setTypeIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [active, setActive] = useState('FairJob');
    const [showArrow, setShowArrow] = useState(false);
    const navigate = useNavigate();
    const types = ['full-stack', 'back-end', 'front-end'];
    const EquiTrackPics = [{src:'Screenshot 2025-02-04 133658.png', href:"https://equitrack-5ecf.onrender.com"},{src:'Screenshot 2025-02-04 133716.png', href:"https://equitrack-5ecf.onrender.com"}, {src:'Screenshot 2025-02-04 133746.png', href:"https://equitrack-5ecf.onrender.com"}, {src:'Screenshot 2025-02-04 133805.png', href:"https://equitrack-5ecf.onrender.com"}];
    const ElitebnbPics = [{src:'Screenshot 2025-02-04 132501.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132437.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132605.png', href: "https://elitebnb-vwec.onrender.com"}, {src:'Screenshot 2025-02-04 132735.png', href: "https://elitebnb-vwec.onrender.com"}];
    const FluxPics = [{src:'Screenshot 2025-02-04 133300.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133429.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133451.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133535.png', href: "https://flux-p.onrender.com"}];
    const mBoldenPics = [{src:'Screenshot 2025-06-10 121855.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 121921.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 121954.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 122026.png', href: "https://www.mboldenchange.org/"}];
    const FairJobPics = [{src:'Screenshot 2026-01-11 101554.png', href: "https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101522.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101433.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101319.png', href:"https://www.lvcfairjob.com/"}]
    const { homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef, menuRef, scrollToSection, visible, setVisible } = useAppContext();
    
    useEffect(() => {
        const allImages = [
            ...FairJobPics,
            ...EquiTrackPics,
            ...ElitebnbPics,
            ...FluxPics,
            ...mBoldenPics
        ];

        allImages.forEach(({src}) => {
            const image = new Image();
            image.src = src;

            image.decode?.().catch(() => {});
        })
    }, []);
    
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
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible'); 
                    }
                });
            },
            { threshold: 0.15 }
        );
        
        const elements = document.querySelectorAll('.picture-section .fade-slide-scale, .underline-95, .underline-90, .underline-85, .About-div, .my-image, .resume-section');
        
        elements.forEach(element => {
            const effect = element.getBoundingClientRect();
            if (effect.top < window.innerHeight && effect.bottom > 0) {
                void element.offsetWidth;
                element.classList.add('visible');
            } else {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);
    
    useEffect(() => {
    const currentType = types[typeIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
        setText(prev =>
        isDeleting
            ? currentType.substring(0, prev.length - 1)
            : currentType.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === currentType) {
        setTimeout(() => setIsDeleting(true), 2000);
        }

        if (isDeleting && text === '') {
        setIsDeleting(false);
        setTypeIndex((prev) => (prev + 1) % types.length);
        }
    }, typingSpeed);

    return () => clearTimeout(timeout);
    }, [text, isDeleting, typeIndex, types]);

    useEffect(() => {
    const underline = document.querySelector('.typing');

    if (!underline) return;

    underline.classList.remove('visible');

    void underline.offsetWidth;

    underline.classList.add('visible');
    }, [text]);


    const display = {
        FairJob: FairJobPics,
        EquiTrack: EquiTrackPics,
        Elitebnb: ElitebnbPics,
        Flux: FluxPics,
        "mBolden-Change": mBoldenPics
    };

    const handleTabChange = (tab) => {
    if (tab === active) return;

    
    setTimeout(() => {
        setActive(tab)
      }, 10); 
    };

    return (
        <div className='root'>
            <div ref={homeRef}>
            <div ref={menuRef} style={{display:'flex', justifyContent:'flex-end', paddingRight:'5px'}}>
            <BsList className='menu' onClick={() => setVisible(!visible)}  />
            </div>
            <h1>Peter Felix <p>I do <span className="typing">{text}<span className="cursor">|</span></span>engineering.</p></h1>
            <img src="/wallpapersden.com_76453-3840x2160.jpg" alt="wallPaper" className='backGround'/>
            </div>
            <div ref={aboutRef} className='About-div fade-slide-scale'><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>About</h2>
            <p style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'19px', color:'grey'}}>Full Stack Software Engineer. Ready to tackle new challenges!</p>
            <div className='about-content'>
            <img className='my-image fade-slide-scale' src="/IMG_4299-cropped.jpg" alt="" />
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
            <div style={{display: 'flex', flexDirection:'column', width:'47%', marginRight:'4%'}}><span className='underline-95'>JAVASCRIPT <span>95%</span></span><span className='underline-95'>EXPRESS <span>95%</span></span><span className='underline-90'>HTML <span>90%</span></span><span className='underline-95'>CSS <span>95%</span></span><span className='underline-95'>NODE.JS <span>95%</span></span><span className='underline-90'>TYPESCRIPT <span>90%</span></span><span className='underline-90'>SEQUELIZE <span>90%</span></span></div>
            <div style={{display: 'flex', flexDirection:'column', width:'47%'}}><span className='underline-90'>REACT <span>90%</span></span><span className='underline-85'>PYTHON <span>85%</span></span><span className='underline-90'>SQL <span>90%</span></span><span className='underline-90'>REDUX <span>90%</span></span><span className='underline-90'>POSTGRESQL <span>90%</span></span><span className='underline-90'>CHART.JS <span>90%</span></span><span className='underline-85'>FIREBASE <span>85%</span></span></div>
            </div>
            </div>
            <div className='resume-section fade-slide-scale' ref={resumeRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Resume</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>Software Engineer with experience developing full-stack web applications. Specialized in full-stack/front-end/back-end development, dedicated to creating polished, efficient solutions that meet business needs and enhance user experiences.</p>
            <div className='experience'>
                <div className='school-side'><span><h2 className='summary half-underline'>Summary</h2><div className='role-block summary-block'><h4 className="role-title summary-role">Peter Felix</h4><p style={{lineHeight:'1.4', color:'#3e3f41', marginLeft:'28px'}}>Dynamic and deadline-oriented Full Stack Software Engineer with experience designing and delivering user-centered digital solutions from inception to refined execution. <p style={{fontWeight:'bold'}}>Github Links Below:</p>
             ● &nbsp;<a href="https://github.com/pfelix23/EquiTrack" target="_blank" rel="noreferrer" className='github'>EquiTrack</a>
            <br /> <br /> ● &nbsp;<a href="https://github.com/pfelix23/Elitebnb" target="_blank" rel="noreferrer" className='github'>Elitebnb</a>
            <br /> <br /> ● &nbsp;<a href="https://github.com/pfelix23/Flux_P" target="_blank" rel="noreferrer" className='github'>Flux</a>
            <br /> <br /> ● &nbsp;<a href="https://drive.google.com/file/d/1d0YE_ABee8JwuszscZiNUaiTsbBbF2nM/view?usp=sharing" target="_blank" rel="noreferrer" className='resume'>Resume PDF</a></p></div></span><span><h2 className='summary half-underline'>Education</h2><div className='role-block'><h3 className='role-title education-role' style={{marginBottom:'-10px'}}> Full Stack Software Engineering</h3><h5 className='dates' style={{marginBottom:'-5px', paddingTop:'6px'}}>2024<VscDash style={{color:'black', marginBottom:'-1px'}}/>2025</h5><p style={{lineHeight:'1.4', color:'#3e3f41', marginLeft:'28px'}}>App Academy, San Francisco, CA <br />
            <p>Studied and gained hands on experience in computer science, web development, and software engineering. Planned, developed, and deployed full-stack projects in both group and individual work settings. Gained daily experience using common programming languages with attention to modern development methodologies such as Object-Oriented-Programming. Technologies learned: Javascript, Python, React, SQL & NoSQL, Express and PostgreSQL.</p></p></div></span></div>
            <div className='pro-side'><span><h2 className=' summary half-underline'>Professional Experience</h2><div className='role-block block-two'><h4 className="role-title first-role" style={{color:'black', marginBottom:'-10px', position:'relative'}}>SOFTWARE ENGINEER</h4> <h5 className='dates' style={{paddingTop:'6px'}}>2025<VscDash style={{color:'black', marginBottom:'-1px'}}/>Present</h5> <p style={{marginTop:'-8px', fontStyle:'italic', marginLeft:'28px'}}>LVC Solutions: Addison, TX (Remote)</p>
            <span style={{display:'flex', marginTop:'-15px'}}>
                <ul className='list-style'>
                    <li>Designed and implemented core messaging features, including end-to-end attachment uploads, secure file previews, and cross-browser download handling using Firebase Storage, Firebase, and Blob APIs.</li><br />
                    <li>Built reusable file preview modal with conditional routing for Office documents and internal proxying, enabling seamless in-app file viewing and downloads.</li><br />
                    <li>Implemented an authentication-aware networking workflow, dynamically verifying connection status and managing pending, sent, and accepted states via secure API integrations.</li><br />
                    <li>Developed a reusable connection search component with real-time filtering, dropdown state management, and outside-click detection to improve user discoverability.</li><br />
                    <li>Collaborated with engineers to integrate production-ready UI components into a shared codebase while maintaining clean separation of concerns.</li>
                </ul> 
            </span>
            </div>
            <div className='role-block'><h4 className="role-title second-role" style={{color:'black', marginBottom:'-5px'}}>SOFTWARE ENGINEER</h4> <h5 className='dates' style={{paddingTop:'6px'}} >2025<VscDash style={{color:'black', marginBottom:'-1px'}} />2025 (Contract)</h5> <p style={{marginTop:'-8px', fontStyle:'italic', marginLeft:'28px', marginBottom:'-5px'}}>mBOLDen Change: Palo Alto, CA (Remote)</p>
            <span style={{display:'flex'}}>
                <ul className='list-style'>
                    <li>Developed reusable, production-ready React components to support multimedia and navigation experiences across the platform, improving UI consistency and reducing integration time for new pages by 30%.</li><br />
                    <li>Collaborated with stakeholders in a contract environment to rapidly deliver features aligned with product requirements, maintaining high code quality and reusability.</li>
                </ul>
            </span>
            </div>
            </span>
            </div>
            </div>
            </div>
            <div className='portfolio-spacing' style={{backgroundColor:'#f8f9fa'}} ref={portfolioRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Portfolio</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41', paddingRight:'5px'}}>Welcome to my portfolio! Below, you&apos;ll find a curated selection of snapshots showcasing some of the projects I&apos;ve worked on recently. Each project highlights my skills in full stack development, illustrating my expertise in both front-end and back-end technologies. Completely innovative web applications and dynamic websites , these examples demonstrate my ability to design, develop, and deploy user-centric solutions. <br /> <br />
            Feel free to explore the various projects to get a better understanding of my work process, the challenges I tackled, and the creative solutions I implemented.</p>
            <div className='portfolio-container'><div className='portfolio-div'><span className={`${active === 'FairJob'? 'active' : ''}`} onClick={() => {handleTabChange('FairJob')}}>FairJob</span><span className={`${active === 'EquiTrack'? 'active' : ''}`} onClick={() => {handleTabChange('EquiTrack')}}>EquiTrack</span><span className={`${active === 'Elitebnb'? 'active' : ''}`} onClick={() => {handleTabChange('Elitebnb')}}>Elitebnb</span><span className={`${active === 'Flux'? 'active' : ''}`} onClick={() => {handleTabChange('Flux')}}>Flux</span><span className={`${active === 'mBolden-Change'? 'active' : ''}`} onClick={() => {handleTabChange('mBolden-Change')}}>mBolden</span></div></div>
            <section className="picture-section">
               <div className='project-card-wrapper'>
                {Object.entries(display).map(([key, images]) => (
                    <div key={key} className={`elite-card project-card ${active === key ? 'visible' : 'hidden'}`}>
                        {images.map((all, index) => (
                            <picture className='elite-section fade-slide-scale' key={index} style={{ transitionDelay: `${index * 10}ms` }}>
                                <section>
                                    <img 
                                        className='elites'
                                        src={all.src} 
                                        alt=''
                                        loading='eager'
                                        decoding='async'
                                        onLoad={(e) => e.target.classList.add('loaded')}
                                        onClick={() => navigate(`/${active}`)}
                                    />
                                </section>
                            </picture>
                        ))}
                    </div>
                ))}
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