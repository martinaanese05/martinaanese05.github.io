import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../contexts/LanguageContext';
import '../styles/languageToggle.scss';

const LANGUAGE_LABELS = {
  en: { code: 'EN', name: 'English' },
  it: { code: 'IT', name: 'Italiano' },
  de: { code: 'DE', name: 'Deutsch' },
};

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown" ref={containerRef}>
      <button
        className="language-dropdown-trigger"
        onClick={() => setIsOpen(prev => !prev)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span>{LANGUAGE_LABELS[language]?.code || language.toUpperCase()}</span>
        <span className={`chevron ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </button>

      {isOpen && (
        <ul className="language-dropdown-menu" role="listbox">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={language === lang}
                className={`language-option ${language === lang ? 'active' : ''}`}
                onClick={() => handleSelect(lang)}
              >
                <span className="language-code">{LANGUAGE_LABELS[lang].code}</span>
                <span className="language-name">{LANGUAGE_LABELS[lang].name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;