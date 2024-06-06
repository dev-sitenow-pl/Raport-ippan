import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import { AlternatelyBox } from "../Elements/AlternatelyBox"
import { Blockquote } from "../Elements/Blockquote"

import './Section3.scss'
const Section3 = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <div className="title-banner">
        <img src="images/webp/banner-3.webp" alt="" />
      </div>
      <div className="alternately-boxes img-include">
        <AlternatelyBox
          ABTitle={translations.section3.title1}
          ABText={translations.section3.text1}
        />
        <AlternatelyBox
          ABTitle={translations.section3.title2}
          ABText={translations.section3.text2}
        />
        <div className="alternately-boxes__box">
          <img src={translations.section3.image} alt={translations.section3.title1} />

        </div>
      </div>

      <Blockquote
        text={translations.section3.blockquote}
        cite={translations.section3.cite}
      />
    </section>
  </>
}

export { Section3 }