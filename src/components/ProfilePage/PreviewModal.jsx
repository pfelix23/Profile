import './PreviewModal.css';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useState } from 'react';


function PreviewModal({isOpen, images, index, onClose, setIndex}) {
    const [isFading, setIsFading] = useState(false);
    const [isClass, setIsClass] = useState('');

    if(!isOpen) return null;

    const changeImage = (direction) => {
        if (isFading) return;

        setIsFading(true);
        setIsClass(direction === 1 ? 'fade-out-two' : 'fade-out');

        const newIndex = (index + direction) % images.length;

        setTimeout(() => {
            setIndex(newIndex);
            setIsFading(false);
        }, 250);
    };

    const next = () => changeImage(1);

    const prev = () => changeImage(-1);

    return (
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
            <div className='modalButton-container'onClick={onClose}>
            <button id='modal-button' onClick={(e) => {e.stopPropagation(); prev()}}><GrLinkPrevious/></button>
            </div>
            <div id='modalImage-container' onClick={onClose}>
            <a href={images[index].href} target='blank' rel='noreFerrer'>
                <img 
                src={images[index].src} 
                className={isFading ? `${isClass}` : `fade-in`}
                alt="" 
                />
            </a>
            </div>
            <div className='modalButton-container' onClick={onClose}>
            <button id='modal-button' onClick={(e) => {e.stopPropagation(); next()}}><GrLinkNext/></button>
            </div>
            </div>
        </div> 
    )
}

export default PreviewModal;