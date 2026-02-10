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