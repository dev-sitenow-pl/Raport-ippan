import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

import './Footer.scss'
const Footer = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <div className="logos-boxes">
        <div className="logos-boxes__box">
          <img src="images/logos/Norway_grants@4x.png" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/logos/ncn_logo_en.png" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/logos/Logo_IPPAN-e1648466994306.jpg" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/logos/university-of-oslo.png" alt="" />
        </div>
        <div className="logos-boxes__box">
          <img src="images/logos/swps-nowe-logo.png" alt="" />
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