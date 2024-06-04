
import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import { AlternatelyBox } from "../Elements/AlternatelyBox"
import { Blockquote } from "../Elements/Blockquote"

const Section4 = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <div className="title-banner">
        <img src="images/banner-4.jpg" alt="" />
      </div>
      <div className="alternately-boxes">
        <AlternatelyBox
          ABTitle={translations.section4.title1}
          ABText={translations.section4.text1}
        />
        <AlternatelyBox
          ABTitle={translations.section4.title2}
          ABText={translations.section4.text2}
        />
      </div>
      <Blockquote
        text={translations.section4.blockquote}
        cite={translations.section4.cite}
      />
    </section>
  </>
}

export { Section4 }