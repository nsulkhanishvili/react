import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from'./components/Contact';
import Prodacts from './components/Prodacts';
import Prodact from './components/Prodact';

//** Context */
import ThemeContext from './components/ThemeContext';


//* i18next */

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import Bootstrap from './components/Bootstrap';

const resources = {
  en: {
    translation: require('./i18n/en.json')
  },
  fr: {
    translation: require('./i18n/fr.json')
  },
  ka: {
    translation: require('./i18n/ka.json')
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ka",
    interpolation: {
      escapeValue: false 
    }
  });


function App() {
  const [theme, setTheme] = useState('light');

  const { t } = useTranslation();
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    Changelen(language);
  }, [language]);

  function Changelen(lng){
        i18n.changeLanguage(lng);    
  }

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      setTheme: setTheme
    }}>
      <div className={`App ${theme}`}>
        <Header />
        <div className='mainDiv'>
          <h3>{t('Welcome to React')}</h3>
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('fr')}>FR</button>
          <button onClick={() => setLanguage('ka')}>KA</button>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="About" element={<About /> } />
            <Route path="Contact" element={<Contact /> } />
            <Route path="Prodacts" element={<Prodacts />} />
            <Route path="Prodacts/:id" element={<Prodact />} />
          </Routes>
          <Bootstrap />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
