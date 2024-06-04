import { useContext } from 'react';
import { TranslationContext } from './TranslationContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(TranslationContext);


  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  }
  return <>
    <li
      className={language === 'pl' ? 'activeLang' : ''}
      onClick={() => handleLanguageChange('pl')}>
      <span>PL</span>
    </li>
    <li
      className={language === 'en' ? 'activeLang' : ''}
      onClick={() => handleLanguageChange('en')}>
      <span>
        EN
      </span>
    </li>
  </>

}

export default LanguageSwitcher;
