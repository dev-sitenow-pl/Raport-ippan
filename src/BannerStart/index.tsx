
import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import './BannerStart.scss'

const BannerStart = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <div className="main-banner">
        <img src="images/banner-start.jpg" alt="" />
        <div className="main-banner__text">
          <h1 dangerouslySetInnerHTML={{ __html: translations.aboutReport.bannerText }} />
          <h4 dangerouslySetInnerHTML={{ __html: translations.aboutReport.bannerTextSmall }} />
        </div>

      </div>
    </section>
  </>
}

export { BannerStart }