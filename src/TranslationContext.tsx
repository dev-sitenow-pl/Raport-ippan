import { createContext, useState, useEffect, ReactNode } from 'react';

// Import tłumaczeń
import plMenu from './data/pl/menu.json';
import plAboutReport from './data/pl/aboutReport.json';
import plCTA from './data/pl/cta.json';
import plMainConclusions from './data/pl/mainConclusions.json';
import plSection3 from './data/pl/section3.json';
import plSection4 from './data/pl/section4.json';
import plSection5 from './data/pl/section5.json';
import plSection6 from './data/pl/section6.json';
import plSection7 from './data/pl/section7.json';
import plFooter from './data/pl/footer.json';


import enMenu from './data/en/menu.json';
import enAboutReport from './data/en/aboutReport.json';
import enCTA from './data/en/cta.json';
import enMainConclusions from './data/en/mainConclusions.json';
import enSection3 from './data/en/section3.json';
import enSection4 from './data/en/section4.json';
import enSection5 from './data/en/section5.json';
import enSection6 from './data/en/section6.json';
import enSection7 from './data/en/section7.json';
import enFooter from './data/en/footer.json';

const startLang = {
  lang: 'pl',
  menuLang: plMenu,
  aboutReportLang: plAboutReport,
  cta: plCTA,
  mainConclusions: plMainConclusions,
  section3: plSection3,
  section4: plSection4,
  section5: plSection5,
  section6: plSection6,
  section7: plSection7,
  footer: plFooter
}

interface Blockquote {
  blockquote: string;
  cite: string;
}

interface MenuItem {
  liName: string;
}

interface AboutReportItem {
  bannerText: string;
  bannerTextSmall: string;
  h2Text: string;
  pText1: string;
  pText2: string;
  pText3: string;
}

interface CTA {
  buttonText: string;
  linkPDF: string;
}

interface MainConclusions extends Blockquote {
  titleMain: string;
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  title3: string;
  text3: string;
  tableText: string;
  tableImage?: string;
}

interface Section3 extends Blockquote {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  image: string;
}

interface Section4 extends Blockquote {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
}

interface Section5 extends Blockquote {
  title1: string;
  text1: string;
  image1: string;
  image2: string;
}

interface Section6 {
  titleMain: string;
  title1: string;
  title2: string;
  infoText: string;
  title3: string;
}

interface Section7 {
  titleMain: string;
  text1: string;
  text2: string;
  text3: string;
}

interface Footer {
  text1: string;
}

interface Translations {
  menu: MenuItem[];
  aboutReport: AboutReportItem;
  cta: CTA;
  mainConclusions: MainConclusions;
  section3: Section3;
  section4: Section4;
  section5: Section5;
  section6: Section6;
  section7: Section7;
  footer: Footer;
}

interface TranslationContextProps {
  language: string;
  translations: Translations;
  setLanguage: (lang: string) => void;
}

const defaultTranslations: Translations = {
  menu: startLang.menuLang,
  aboutReport: startLang.aboutReportLang,
  cta: startLang.cta,
  mainConclusions: startLang.mainConclusions,
  section3: startLang.section3,
  section4: startLang.section4,
  section5: startLang.section5,
  section6: startLang.section6,
  section7: startLang.section7,
  footer: startLang.footer,
}

const defaultValue: TranslationContextProps = {
  language: startLang.lang,
  translations: defaultTranslations,
  setLanguage: () => { }
}

export const TranslationContext = createContext<TranslationContextProps>(defaultValue);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(startLang.lang);
  const [translations, setTranslations] = useState<Translations>(defaultTranslations);

  useEffect(() => {
    const loadTranslations = () => {
      if (language === 'en') {
        setTranslations({
          menu: enMenu,
          aboutReport: enAboutReport,
          cta: enCTA,
          mainConclusions: enMainConclusions,
          section3: enSection3,
          section4: enSection4,
          section5: enSection5,
          section6: enSection6,
          section7: enSection7,
          footer: enFooter
        });
      } else if (language === 'pl') {
        setTranslations({
          menu: plMenu,
          aboutReport: plAboutReport,
          cta: plCTA,
          mainConclusions: plMainConclusions,
          section3: plSection3,
          section4: plSection4,
          section5: plSection5,
          section6: plSection6,
          section7: plSection7,
          footer: plFooter
        });
      }
    };
    loadTranslations();
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}
