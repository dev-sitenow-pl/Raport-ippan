import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import { AlternatelyBox } from "../Elements/AlternatelyBox"
import { Blockquote } from "../Elements/Blockquote"

const Section5 = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>

      <div className="title-banner">
        <img src="images/banner-5.jpg" alt="" />
      </div>
      <div className="alternately-boxes">
        <AlternatelyBox
          ABTitle={translations.section5.title1}
          ABText={translations.section5.text1}
        />
      </div>
      <div className="flex-row no-padd">
        <div className="colflex-6">
          <img src={translations.section5.image1} alt={translations.section5.title1} />
        </div>
        <div className="colflex-6">
          <img className="current-state" src={translations.section5.image2} alt={translations.section5.title1} />
        </div>
      </div>
      <Blockquote
        text={translations.section5.blockquote}
        cite={translations.section5.cite}
      />
    </section>
  </>
}

export { Section5 }