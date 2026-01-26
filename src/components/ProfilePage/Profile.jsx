import { useState, useEffect } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { GiEnvelope } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useAppContext } from "../../AppContext";
import { FaArrowCircleUp } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import './Profile.css';
import PreviewModal from './PreviewModal';

function Profile() {
    const [text, setText] = useState('');
    const [typeIndex, setTypeIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [active, setActive] = useState('FairJob');
    const [isActive, setIsActive] = useState('FairJob');
    const [showArrow, setShowArrow] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const types = ['full-stack', 'back-end', 'front-end'];
    const EquiTrackPics = [{src:'Screenshot 2025-02-04 133658.png', href:"https://equitrack-5ecf.onrender.com"},{src:'Screenshot 2025-02-04 133716.png', href:"https://equitrack-5ecf.onrender.com"}, {src:'Screenshot 2025-02-04 133746.png', href:"https://equitrack-5ecf.onrender.com"}, {src:'Screenshot 2025-02-04 133805.png', href:"https://equitrack-5ecf.onrender.com"}];
    const ElitebnbPics = [{src:'Screenshot 2025-02-04 132501.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132437.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132605.png', href: "https://elitebnb-vwec.onrender.com"}, {src:'Screenshot 2025-02-04 132735.png', href: "https://elitebnb-vwec.onrender.com"}];
    const FluxPics = [{src:'Screenshot 2025-02-04 133300.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133429.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133451.png', href: "https://flux-p.onrender.com"},{src:'Screenshot 2025-02-04 133535.png', href: "https://flux-p.onrender.com"}];
    const mBoldenPics = [{src:'Screenshot 2025-06-10 121855.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 121921.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 121954.png', href: "https://www.mboldenchange.org/"}, {src:'Screenshot 2025-06-10 122026.png', href: "https://www.mboldenchange.org/"}];
    const FairJobPics = [{src:'Screenshot 2026-01-11 101554.png', href: "https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101522.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101433.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101319.png', href:"https://www.lvcfairjob.com/"}]
    const { homeRef, aboutRef, skillsRef, resumeRef, portfolioRef, contactRef, scrollToSection, visible, setVisible } = useAppContext();
    
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
        
        const elements = document.querySelectorAll('.picture-section .fade-slide-scale, .underline-95, .underline-90, .underline-85, .About-div, .my-image');
        
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
    }, [isActive]);
    
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


    const display = () => {
        if (isActive === 'Elitebnb') {
            return ElitebnbPics
        }  if  (isActive === 'Flux') {
            return FluxPics
        }  if (isActive === 'EquiTrack') {
            return EquiTrackPics
        }  if (isActive === 'mBolden-Change') {
            return mBoldenPics
        } if(isActive === 'FairJob') {
            return FairJobPics
        }
        else return []
    };

    const openModal = (images, index) => {
        setModalImages(images);
        setCurrentIndex(index);
        setIsModalOpen(true);
    }

    const handleTabChange = (tab) => {
    if (tab === isActive) return;

    setIsTransitioning(true);

    setTimeout(() => {
        setActive(tab)
        setIsActive(tab);
        setIsTransitioning(false);
    }, 600); 
    };


    return (
        <div className='root'>
            <div ref={homeRef}>
            <div style={{display:'flex', justifyContent:'flex-end', paddingRight:'5px'}}>
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
            <br /> <br /> ● <a href="https://drive.google.com/file/d/1eig2blx0eB-0_ffafFgAZvOV8YAdmDYt/view?usp=sharing" target="_blank" rel="noreferrer" className='resume'>Resume PDF</a></p></span><span><h3>Education Full Stack Software Engineering</h3><p style={{lineHeight:'1.4', color:'#3e3f41'}}>App Academy, San Francisco, CA <br /><br />
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
            <div className='portfolio-container'><div className='portfolio-div'><span className={`${active === 'FairJob'? 'active' : ''}`} onClick={() => {handleTabChange('FairJob')}}>FairJob</span><span className={`${active === 'EquiTrack'? 'active' : ''}`} onClick={() => {handleTabChange('EquiTrack')}}>EquiTrack</span><span className={`${active === 'Elitebnb'? 'active' : ''}`} onClick={() => {handleTabChange('Elitebnb')}}>Elitebnb</span><span className={`${active === 'Flux'? 'active' : ''}`} onClick={() => {handleTabChange('Flux')}}>Flux</span><span className={`${active === 'mBolden-Change'? 'active' : ''}`} onClick={() => {handleTabChange('mBolden-Change')}}>mBolden</span></div></div>
            <section className='picture-section'>
            <div className='elite-card'>
            {display().map(((all, index) => (
                <picture  className='elite-section fade-slide-scale' style={{ transitionDelay: `${index * 10}ms` }} key={index}>
                <section className={`picture-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                <img 
                 className='elites'
                 src={all.src} 
                 alt=''
                 onClick={()=> openModal(display(), index)}
                 />
                 </section>
                </picture>)
            ))}
            </div>
            </section>
            </div>
            <div ref={contactRef}><h2 className='half-underline' style={{marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'32px', color: 'rgb(23, 107, 155)', paddingBottom:'10px'}}>Contact</h2>
            <p style={{lineHeight:'1.4', marginLeft:'2%', fontFamily:'"Open Sans", sans-serif', fontSize:'17px', color:'#3e3f41'}}>If you would like to schedule time to meet with me, please feel free to reach out via email or phone. Additionally, I can set up a time to go over any project demos as well.</p>
            <div className='icons'><span style={{display:'flex', marginTop:'3%'}}><SlLocationPin className='contact-icon'/>&nbsp;<span>Location: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>New York, NY</span></span></span><span style={{display:'flex'}}><GiEnvelope className='contact-icon'/>&nbsp;<span>Email: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>peter.felix23@gmail.com</span></span></span><span style={{display:'flex'}}><IoPhonePortraitOutline className='contact-icon'/>&nbsp;<span>Call: <br /> <span style={{color: 'rgb(23, 107, 155)', fontSize:'14px'}}>+1 (718) 736-3969</span></span></span>
                  </div>
            </div>  
            <PreviewModal
            isOpen={isModalOpen}
            images={modalImages}
            index={currentIndex}
            setIndex={setCurrentIndex}
            onClose={() => setIsModalOpen(false)}
            /> 
            {showArrow && (
            <div className='home' onClick={() => scrollToSection(homeRef)}>
                <FaArrowCircleUp className='arrow' />
            </div>
            )}
        </div>
    )
}

export default Profile;