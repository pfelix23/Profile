import { createContext, useContext, useRef, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/ProfilePage/Profile';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const resumeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const menuRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const scrollToSection = (sectionRef) => {
      if (!sectionRef.current) return;

      const container = document.querySelector('.root');
      const style = window.getComputedStyle(sectionRef.current);
      const hasTransform = style.transform !== 'none'; 
      const isMobile = window.innerWidth <= 932;
      let yOffset = 0;

      if (hasTransform) {
        if (isMobile && sectionRef === resumeRef) {
          yOffset = 25;      
        } else {
          yOffset = -1;
        }
      }

      const y = sectionRef.current.offsetTop + yOffset;

      container.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    };    

    return (
      <AppContext.Provider value={{ 
          Profile, 
          Navigation,
          homeRef,
          aboutRef,
          skillsRef,
          resumeRef,
          portfolioRef,
          contactRef,
          menuRef,
          visible,
          setVisible,
          scrollToSection }}>
        {children}
      </AppContext.Provider>
    );
};