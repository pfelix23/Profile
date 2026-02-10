import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { Icon } from "@iconify/react";
import PreviewModal from "./PreviewModal";
import './Details.css';

function Fairjob () {
    const FairJobPics = [{src:'Screenshot 2026-01-11 101554.png', href: "https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101522.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101433.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101319.png', href:"https://www.lvcfairjob.com/"}]
    const [index, setIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const active = 'FairJob';
    const navigate = useNavigate();
    const display = {
        FairJob: FairJobPics,
    };
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % display[active].length);
    }, 3000);

    return () => clearInterval(interval);
    }, [active]);

    const openModal = (images, index) => {
        setModalImages(images);
        setCurrentIndex(index);
        setIsModalOpen(true);
    }
    
    return(
        <div className="root-details">
            <div className="header">
                <h2>{active} Web</h2>
                <section style={{display:'flex', flexDirection:'row', marginRight:'4%'}}>
                    <h4 className="home-details" onClick={() => navigate('/')}> Home </h4>
                    <h4>&nbsp;&nbsp;/&nbsp;&nbsp;{active} Web Details</h4>
                </section>
            </div>
            <div className="containers">
                <div className="container-one">
                    <section>
                        <div className="detail-container">
                            <picture className='picture-container'>
                                <img 
                                    key={index} 
                                    className="detail-image slide-in" 
                                    src={display[active][index].src} alt="" 
                                    onClick={()=> openModal(display[active], index)}
                                />
                                <div>
                                    <span onClick={() => setIndex(0)} className={`dot ${index === 0 ? 'active' : ''}`}></span>
                                    <span onClick={() => setIndex(1)} className={`dot ${index === 1 ? 'active' : ''}`}></span>
                                    <span onClick={() => setIndex(2)} className={`dot ${index === 2 ? 'active' : ''}`}></span>
                                    <span onClick={() => setIndex(3)} className={`dot ${index === 3 ? 'active' : ''}`}></span>
                                </div>
                            </picture>
                        </div>
                    </section>
                </div>
                <div className="container-two">
                    <div className="project-information">
                        <h2>Project Information</h2>
                        <p><strong>Category: </strong>Web Development </p>
                        <p><strong>Project Date: </strong> June, 2025</p>
                        <p style={{display:'flex'}}><strong>URL: </strong><div style={{color:'rgb(23, 107, 155)'}}>&nbsp;https://www.lvcfairjob.com</div></p>
                        <div style={{marginLeft:'15px', width:'50%'}}><a href="https://www.lvcfairjob.com/" target="_blank" rel="noreferrer" className="button-15" style={{fontSize:'17px', display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'Raleway', border:'none', color:'white', backgroundColor:'rgb(23, 107, 155)', textDecoration:'none'}}><Globe style={{height:'18px', width:'18px'}}/>&nbsp;Visit Website</a></div>
                    </div>
                    <div className="project-details">
                        <h2>About {active}:</h2>
                        <p>
                           FairJob is a full-stack, AI-powered job platform built for both web and mobile experiences. 
                           Developed with TypeScript, React, Next.js, Firebase, and Tailwind CSS, the application is designed to modernize the job search process through intelligent candidate verification and AI-driven job matching. 
                           FairJob focuses on delivering secure, scalable, and user-centric hiring solutions that improve trust and efficiency for both job seekers and employers.
                        </p>
                        <section style={{display:'flex', justifyContent:'space-around'}}>
                            <div className="tech-tile"><Icon icon="logos:typescript-icon" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:react" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:nextjs-icon" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:firebase" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:tailwindcss-icon" width={36} /></div>
                        </section>
                    </div>
                </div>
            </div>
            <PreviewModal
                isOpen={isModalOpen}
                images={modalImages}
                index={currentIndex}
                setIndex={setCurrentIndex}
                onClose={() => setIsModalOpen(false)}
            /> 
        </div>
    )
}

export default Fairjob;