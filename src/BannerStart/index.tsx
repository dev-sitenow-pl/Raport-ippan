
import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import './BannerStart.scss'

const BannerStart = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <span id="sectionTarget__6" className="target-scroll"></span>
      <div className="main-banner">
        <img src="images/webp/banner-start.webp" alt="" />
        <div className="main-banner__text">
          <h1 dangerouslySetInnerHTML={{ __html: translations.aboutReport.bannerText }} />
          <h4 dangerouslySetInnerHTML={{ __html: translations.aboutReport.bannerTextSmall }} />
        </div>

      </div>
    </section>
  </>
}

export { BannerStart }