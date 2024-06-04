import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import './CTA.scss'
const CTA = () => {
  const { translations } = useContext(TranslationContext);
  return <>

    <div className="cta">
      <a href={translations.cta.linkPDF} className="cta-button" download>
        {translations.cta.buttonText}
        <span className="material-symbols-outlined">
          download
        </span>
      </a>
    </div>
  </>
}

export { CTA };