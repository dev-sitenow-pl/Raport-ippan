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
        <div className="colflex-6" dangerouslySetInnerHTML={{ __html: translations.section7.text1 }} />
        <div className="colflex-6" dangerouslySetInnerHTML={{ __html: translations.section7.text2 }} />
      </div>
      <div className="flex-row">
        <div className="colflex-6"  >
          <div className="project-box" dangerouslySetInnerHTML={{ __html: translations.section7.text3 }} />

        </div>
      </div>
    </section>
  </>
}

export { Section7 }