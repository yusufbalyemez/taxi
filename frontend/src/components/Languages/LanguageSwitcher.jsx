import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage('ger')}>Deutsch</button>
      <button onClick={() => switchLanguage('eng')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
