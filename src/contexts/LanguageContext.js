import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = ['en', 'it', 'de'];
const STORAGE_KEY = 'preferredLanguage';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en'); // Default to English

  // On mount: figure out which language to use.
  // Priority: URL ?lang= param (explicit link/share) > saved preference (localStorage) > default 'en'
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');

      if (SUPPORTED_LANGUAGES.includes(langParam)) {
        setLanguageState(langParam);
        try {
          window.localStorage.setItem(STORAGE_KEY, langParam);
        } catch (error) {
          console.warn('Could not save language preference:', error);
        }
        return;
      }

      try {
        const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
          setLanguageState(savedLanguage);
        }
      } catch (error) {
        console.warn('Could not read saved language preference:', error);
      }
    }
  }, []);

  // Update URL (so links can be shared with the language baked in) and persist to localStorage
  // (so the choice survives full page navigations, e.g. clicking into a project page)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, language);
      } catch (error) {
        console.warn('Could not save language preference:', error);
      }

      const urlParams = new URLSearchParams(window.location.search);
      const currentLangParam = urlParams.get('lang');

      if (currentLangParam !== language) {
        urlParams.set('lang', language);
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [language]);

  const setLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage)) {
      setLanguageState(newLanguage);
    }
  };

  // Cycles en -> it -> de -> en, kept for any code that still wants a simple toggle
  const toggleLanguage = () => {
    setLanguageState(prev => {
      const currentIndex = SUPPORTED_LANGUAGES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
      return SUPPORTED_LANGUAGES[nextIndex];
    });
  };

  // Utility function to generate URLs with language parameter, so navigating
  // (even via a plain full-page link) keeps the chosen language.
  const getLanguageUrl = (targetLanguage, pathname = '') => {
    if (typeof window === 'undefined') return '';

    const urlParams = new URLSearchParams();
    urlParams.set('lang', targetLanguage);
    const basePath = pathname || window.location.pathname;
    return `${basePath}?${urlParams.toString()}`;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      getLanguageUrl,
      isEnglish: language === 'en',
      isItalian: language === 'it',
      isGerman: language === 'de'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};