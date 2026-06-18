import React, { createContext, useContext, useState, useEffect } from 'react';

const IntentContext = createContext();

export const IntentProvider = ({ children }) => {
  const [persona, setPersona] = useState('Compliance'); // Default

  useEffect(() => {
    const PERSONAS = {
      CFO: 'Finance',
      LOGISTICS_DIRECTOR: 'Operations',
      UNKNOWN: 'Compliance'
    };

    const params = new URLSearchParams(window.location.search);
    const urlPersona = params.get('persona') || params.get('utm_campaign');

    let resolvedPersona = PERSONAS.UNKNOWN;

    // 1. URL parameter check
    if (urlPersona) {
      if (urlPersona.toLowerCase().includes('finance') || urlPersona.toLowerCase() === 'cfo') {
        resolvedPersona = PERSONAS.CFO;
      } else if (urlPersona.toLowerCase().includes('supply') || urlPersona.toLowerCase() === 'logistics') {
        resolvedPersona = PERSONAS.LOGISTICS_DIRECTOR;
      }
    }

    // 2. Referrer check
    if (resolvedPersona === PERSONAS.UNKNOWN) {
      const referrer = document.referrer.toLowerCase();
      if (referrer.includes('wsj.com') || referrer.includes('bloomberg') || referrer.includes('finance')) {
        resolvedPersona = PERSONAS.CFO;
      } else if (referrer.includes('supplychaindive') || referrer.includes('logistics')) {
        resolvedPersona = PERSONAS.LOGISTICS_DIRECTOR;
      }
    }

    // 3. LocalStorage fallback
    if (resolvedPersona === PERSONAS.UNKNOWN) {
      const storedPersona = localStorage.getItem('igo_user_persona');
      if (storedPersona && Object.values(PERSONAS).includes(storedPersona)) {
        resolvedPersona = storedPersona;
      }
    }

    localStorage.setItem('igo_user_persona', resolvedPersona);
    setPersona(resolvedPersona);
  }, []);

  return (
    <IntentContext.Provider value={{ persona, setPersona }}>
      {children}
    </IntentContext.Provider>
  );
};

export const useIntent = () => useContext(IntentContext);
