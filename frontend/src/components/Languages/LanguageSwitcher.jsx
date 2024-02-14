import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage('eng')}>English</button>
      <button onClick={() => switchLanguage('ger')}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
