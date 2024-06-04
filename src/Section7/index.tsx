import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext'; import { TitleSection } from "../Elements/TitleSection"

const Section7 = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <span id="sectionTarget__4" className="target-scroll"></span>
      <TitleSection>
        {translations.section7.titleMain}
      </TitleSection>

      <div className="flex-row">
        <div className="colflex-6">
          {translations.section7.text1}
        </div>
        <div className="colflex-6">
          {translations.section7.text2}
        </div>
      </div>
      <p>


      </p>
    </section>
  </>
}

export { Section7 }