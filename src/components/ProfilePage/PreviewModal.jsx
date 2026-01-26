import './PreviewModal.css';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


function PreviewModal({isOpen, images, index, onClose, setIndex}) {
    if(!isOpen) return null;

    const next = () => {
        setIndex((index + 1) % images.length)
    }

    const prev = () => {
        setIndex((index - 1 + images.length) % images.length)
    }

    return (
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
            <div className='modalButton-container'onClick={onClose}>
            <button id='modal-button' onClick={(e) => {e.stopPropagation(); prev()}}><GrLinkPrevious/></button>
            </div>
            <div id='modalImage-container' onClick={onClose}>
            <a href={images[index].href} target='blank' rel='noreFerrer'>
                <img src={images[index].src} alt="" />
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