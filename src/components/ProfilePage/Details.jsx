import { useState} from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';
import './Details.css';



function Details () {
    const FairJobPics = [{src:'Screenshot 2026-01-11 101554.png', href: "https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101522.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101433.png', href:"https://www.lvcfairjob.com/"}, {src:'Screenshot 2026-01-11 101319.png', href:"https://www.lvcfairjob.com/"}]
    const [index, setIndex] = useState(0);
    const active = 'FairJob';
    const navigate = useNavigate();
    
    const display = {
        FairJob: FairJobPics,
    };
    
    return(
        <div className="root-details">
            <div className="header">
                <h2 style={{marginLeft:'10px'}}>{active} Web</h2>
                <section style={{display:'flex', flexDirection:'row'}}>
                    <h4 className="home-details" onClick={() => navigate('/')}> Home </h4>
                    <h4>&nbsp;&nbsp;/&nbsp;&nbsp;{active} Web Details</h4>
                </section>
            </div>
            <div className="containers">
                <div className="container-one">
                    <section>
                        <div className="detail-container">
                            <picture className='picture-container'>
                                <img className="detail-image" src={display[active][index].src} alt="" />
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
                        <p><strong>URL: </strong><a style={{color:'rgb(23, 107, 155)', textDecoration:'none'}} href="https://www.lvcfairjob.com/">https://www.lvcfairjob.com</a></p>
                    </div>
                    <div className="project-details">
                        <h2>About {active}:</h2>
                        <p>
                           FairJob is a full-stack, AI-powered job platform built for both web and mobile experiences. 
                           Developed with TypeScript, React, Next.js, Firebase, and Tailwind CSS, the application is designed to modernize the job search process through intelligent candidate verification and AI-driven job matching. 
                           FairJob focuses on delivering secure, scalable, and user-centric hiring solutions that improve trust and efficiency for both job seekers and employers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;