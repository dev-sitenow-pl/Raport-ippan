
import { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import { TitleSection } from "../Elements/TitleSection"

const Section6 = () => {
  const { translations } = useContext(TranslationContext);
  return <>
    <section>
      <span id="sectionTarget__3" className="target-scroll"></span>

      <TitleSection>
        {translations.section6.titleMain}
      </TitleSection>
      <div className="flex-row">
        <div className="colflex-6">
          <h3>
            {translations.section6.title1}
          </h3>
          <ul className="ul-non-style">
            <li>Kuba Kryś - <span>kkrys[at]psych.pan.pl</span></li>
            <li>Marta Roczniewska - <span>mroczniewska[at]spws.edu.pl</span></li>
            <li>Nina Witoszek - <span>nina.witoszek[at]sum.uio.no</span></li>
          </ul>
        </div>
        <div className="colflex-6">
          <h3>
            {translations.section6.title2}
          </h3>
          <p>
            Agata Gąsiorowska, Kaja Głomb, Maciej Górski, Anna Kuźmińska, Mads Larsen, Magdalena Marszałek, Paweł Mordasiewicz, Katarzyna Myślińska-Szarek, Mateusz Olechowski, Ewa Palikot, Ewelina Purc, Hanna Vanedskog, Arkadiusz Wąsiel, June Yeung
            <br />
            <br />
            <small>{translations.section6.infoText}</small>
          </p>
        </div>
      </div>


    </section>
  </>
}

export { Section6 }