import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { Icon } from "@iconify/react";
import PreviewModal from "./PreviewModal";
import './Details.css';

function Elitebnb () {
    const ElitebnbPics = [{src:'Screenshot 2025-02-04 132501.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132437.png', href: "https://elitebnb-vwec.onrender.com"},{src:'Screenshot 2025-02-04 132605.png', href: "https://elitebnb-vwec.onrender.com"}, {src:'Screenshot 2025-02-04 132735.png', href: "https://elitebnb-vwec.onrender.com"}];
    const [index, setIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const active = 'Elitebnb';
    const navigate = useNavigate();
    const display = {
        Elitebnb: ElitebnbPics,
    };
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % display[active].length);
    }, 2500);

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
            <div className='tabs'><div className='tab-div'><span className={`${active === 'FairJob'? 'active' : ''}`} onClick={() => {navigate('/FairJob')}}>FairJob</span><span className={`${active === 'EquiTrack'? 'active' : ''}`} onClick={() => {navigate('/EquiTrack')}}>EquiTrack</span><span className={`${active === 'Elitebnb'? 'active' : ''}`} onClick={() => {navigate('/Elitebnb')}}>Elitebnb</span><span className={`${active === 'Flux'? 'active' : ''}`} onClick={() => {navigate('/Flux')}}>Flux</span><span className={`${active === 'mBolden-Change'? 'active' : ''}`} onClick={() => {navigate('/mBolden-Change')}}>mBolden</span></div></div>
            <div className="containers">
                <div className="container-one">
                    <section>
                        <div className="detail-container">
                            <picture className='picture-container'>
                                <div className="image-stack">
                                    {display[active].map((img, i) => (
                                        <img 
                                            key={i} 
                                            className={`detail-image ${index === i ? 'visible' : ''}`} 
                                            src={img.src} alt="" 
                                            onClick={()=> openModal(display[active], i)}
                                        />
                                    ))}
                                </div>
                                <div className="dots">
                                    {display[active].map((_, i) => (
                                        <span
                                            key={i}
                                            onClick={() => setIndex(i)}
                                            className={`dot ${index === i ? 'active' : ''}`}
                                        >
                                        </span>
                                    ))}
                                </div>
                            </picture>
                        </div>
                    </section>
                </div>
                <div className="container-two">
                    <div className="project-information">
                        <h2>Project Information</h2>
                        <p><strong>Category: </strong>Web Development </p>
                        <p><strong>Project Date: </strong> November, 2024</p>
                        <p style={{display:'flex'}}><strong>URL: </strong><div style={{color:'rgb(23, 107, 155)'}}>&nbsp;https://elitebnb-vwec.onrender.com</div></p>
                        <div style={{marginLeft:'15px', width:'50%'}}><a href="https://elitebnb-vwec.onrender.com" target="_blank" rel="noreferrer" className="button-15" style={{fontSize:'17px', display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'Raleway', border:'none', color:'white', backgroundColor:'rgb(23, 107, 155)', textDecoration:'none'}}><Globe style={{height:'18px', width:'18px'}}/>&nbsp;Visit Website</a></div>
                    </div>
                    <div className="project-details">
                        <h2>About {active}:</h2>
                        <p>
                            An Airbnb clone replicating key user experiences while leveraging modern technologies and best practices.
                            Developed dynamic spot detail pages with review management, image galleries, and modal-driven forms using React, Redux, and custom authentication.
                            Utilized the useDispatch hook to dispatch actions to the Redux store allowing users to update the global state and create/update their spots.
                        </p>
                        <section style={{display:'flex', justifyContent:'space-around'}}>
                            <div className="tech-tile"><Icon icon="logos:javascript" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:react" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:redux" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:postgresql" width={36} /></div>
                            <div className="tech-tile"><Icon icon="logos:css-3-official" width={36} /></div>
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

export default Elitebnb;