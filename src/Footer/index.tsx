import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

import './Footer.scss'
const Footer = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <div className="logos-boxes">
        <div className="logos-boxes__box">
          <img src="images/webp/logos/Norway_grants@4x.webp" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/webp/logos/ncn_logo_en.webp" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/webp/logos/Logo_IPPAN-e1648466994306.webp" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/webp/logos/university-of-oslo.webp" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/webp/logos/swps-nowe-logo.webp" alt="" />
        </div>

      </div>
    </section>

    <footer>
      <div className="box-flex jc-center">
        <div className="footer-contact-box">
          macropsychology[at]psych.pan.pl{translations.footer.text1}
        </div>
      </div>
    </footer>

  </>
}

export { Footer }