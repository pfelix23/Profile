import React, { createContext, useContext, useRef } from 'react';
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

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
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
        scrollToSection }}>
      {children}
    </AppContext.Provider>
  );
};