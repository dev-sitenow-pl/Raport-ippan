import { useContext, useEffect } from "react";
import { AlternatelyBox } from "../Elements/AlternatelyBox"
import { Blockquote } from "../Elements/Blockquote"
import { TitleSection } from "../Elements/TitleSection"
import { TranslationContext } from '../TranslationContext';

import './MainConclusions.scss'

declare global {
  interface Window {
    InfogramEmbeds?: {
      process: () => void;
      initialized: boolean;
    };
  }
}

const MainConclusions = () => {
  const { translations, language } = useContext(TranslationContext);

  useEffect(() => {
    const scriptContent = `!function(e,n,i,s){var d="InfogramEmbeds";var o=e.getElementsByTagName(n)[0];
    if(window[d]&&window[d].initialized)window[d].process&&window[d].process();else if(!e.getElementById(i)){
    var r=e.createElement(n);r.async=1,r.id=i,r.src=s,o.parentNode.insertBefore(r,o)}}(document,"script","infogram-async",
    "https://e.infogram.com/js/dist/embed-loader-min.js");`;

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = scriptContent;

    document.body.appendChild(inlineScript);

    // Wymuszenie przetworzenia Infogram po załadowaniu skryptu
    inlineScript.onload = () => {
      if (window.InfogramEmbeds && window.InfogramEmbeds.process) {
        window.InfogramEmbeds.process();
      }
    };

    // Usunięcie skryptu przy odmontowaniu komponentu
    return () => {
      document.body.removeChild(inlineScript);
    };
  }, [language]);

  return <>
    <section>
      <span id="sectionTarget__0" className="target-scroll"></span>
      <TitleSection>
        {translations.mainConclusions.titleMain}
      </TitleSection>

      <div className="alternately-boxes">
        <AlternatelyBox ABTitle={translations.mainConclusions.title1}
          ABText={translations.mainConclusions.text1} />
        <AlternatelyBox
          ABTitle={translations.mainConclusions.title2}
          ABText={translations.mainConclusions.text2} />

        <AlternatelyBox
          ABTitle={translations.mainConclusions.title3}
          ABText={translations.mainConclusions.text3} />
      </div>

      <div className="tabel-info">
        <div
          id="myInfogramPl"
          className="infogram-embed"
          data-id="a0ae6332-e0fb-44bb-bce1-9324e0779533"
          data-type="interactive"
          data-title="World Map"
          style={{ display: language === 'pl' ? 'block' : 'none' }}
        ></div>
        <div
          id="myInfogramEn"
          className="infogram-embed"
          data-id="153d3465-14ec-4421-aacf-3c8574897e00"
          data-type="interactive"
          data-title="World Map"
          style={{ display: language === 'en' ? 'block' : 'none' }}
        ></div>
        {/* <div className="tabel-info__box">
          <img src={translations.mainConclusions.tableImage} alt={translations.mainConclusions.tableText} />
        </div> */}
        <div className="tabel-info__box text">
          <div className="tabel-info__box__text" dangerouslySetInnerHTML={{ __html: translations.mainConclusions.tableText }} />

        </div>



      </div>

      <Blockquote
        text={translations.mainConclusions.blockquote}
        cite={translations.mainConclusions.cite}
      />

    </section>
  </>
}

export { MainConclusions }