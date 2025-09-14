import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`btn btn-sm ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`btn btn-sm ${i18n.language === 'vi' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => changeLanguage('vi')}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
