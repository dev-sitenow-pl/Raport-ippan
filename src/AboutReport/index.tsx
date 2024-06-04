import { useContext } from "react";
import { TranslationContext } from "../TranslationContext";

import './AboutReport.scss'
import { TitleSection } from "../Elements/TitleSection";

const AboutReport = () => {
  const { translations } = useContext(TranslationContext);

  return <>
    <section>
      <span id="sectionTarget__2" className="target-scroll"></span>
      <TitleSection>
        {translations.aboutReport.h2Text}
      </TitleSection>

      <div className="first-boxes">
        <div className="box">
          <p dangerouslySetInnerHTML={{ __html: translations.aboutReport.pText1 }} />
        </div>
        <div className="box">
          <p dangerouslySetInnerHTML={{ __html: translations.aboutReport.pText2 }} />
        </div>
        <div className="box">
          <p dangerouslySetInnerHTML={{ __html: translations.aboutReport.pText3 }} />
        </div>
      </div>
      <img src="images/banner-2.jpg" alt="" />
    </section>

  </>
}

export { AboutReport };