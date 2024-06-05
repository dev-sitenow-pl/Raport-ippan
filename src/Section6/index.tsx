
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
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div className="colflex-12">
          <h3>
            {translations.section6.title3}
          </h3>
          <p>
            Adil Samekin, Agata Kocimska-Bortnowska, Agnieszka Wojtczuk-Turek, Agustin Espinosa, Aidos Bolatov, Alejandra Domínguez Espinosa, Aleksandra Kosiarczyk, Alexander Malyonov, Alin Gavreliuc, Ana Maria Rocha, Ángel Sánchez-Rodríguez, Anna Almakaeva, Anna Kwiatkowska, Arina Malyonova, Arina Malyonova, Arkadiusz Wąsiel, Arno Baltin, Ayu Okvitawanli, Azar Nadi, Azhar Hussain, Beate Schwarz, Belkacem Yakhlef, Biljana Gjoneska, Boris Sokolov, Brian W. Haas, Cai Xing, Carla Sofia Esteves, Charity Akotia , Chien-Ru Sun, Christin-Melanie Vauclair, Claudio Torres, D. M. Arévalo Mira, Danielle Ochoa, David Igbokwe, David Sirlopú, Diana Boer, Elke Murdock, Elmina Kazimzade, Eric Kenson Yau, Eric Raymond Igou, Espen Røysamb, Farida Guemaz, Fatma Mokadem, Fridanna Maricchiolo, Fumiko Kano Glückstad, Grace Akello, Hannah Lee, Heyla Selim, Hidefumi Hitokoto, İdil Işık, Isabelle Albert, Iva Poláčková Šolcová, Jae-Won Yang, John Zelenski, Joonha Park, Jorge Vergara-Morales, Julien Teyssier, June Yeung, Katharina Henk, Kiều Thị Thanh Trà, Kongmeng Liew, Laura Andrade, Lenka Selecká, Lily Appoh, Liman Man Wai Li, Linda Mohammed, Lucie Kluzová Kracmárová, Maciej Górski, Magdalena Garvanova, Magdalena Mosanya, Mahmoud Boussena, Maria Stogianni, Márta Fülöp, Marta Roczniewska, Martin Nader, Marwan Al-Zoubi, Mary Anne Lauri, Mateusz Olechowski, Md. Reza-A-Rabby, Michael H. Bond, Mladen Adamovic, Mohsen Joshanloo, Moritz Streng, Morten Tønnessen, Mostak Ahamed Imran, Muhammad Rizwan, Natalia Kascakova, Natalia Soboleva, Natasza Kosakowska-Berezecka, Naved Iqbal, Nicole Kronberger, Nina Witoszek, Nuha Iter, Nur Amali Aminnuddin, Nur Fariza Mustaffa, Olga Kostoula, Olha Vlasenko, Oriana Mosca, Oumar Barry, Pablo Eduardo Barrientos, Patrick Denoux, Petra Anić, Plamen Akaliyski, Rafail Hasanov, Ragna Benedikta Garðarsdóttir, Rasmata Bakyono-Nabaloum, Resham Asif, Rosita Sobhie, Ruta Sargautyte, Tamara Mohoric, Ursula Serdarevich, Vaitsa Giannouli, Vassilis Pavlopoulos, Victoria Wai Lan Yeung, Vivian L. Vignoles, Vivian Miu-Chi Lun, Vlad Costin, Vladimer Gamsakhurdia, Vladimir Turjačanin, Vladyslav Romashov, Wijnand van Tilburg, Yukiko Uchida, Yvette van Osch, Zoran Pavlović
            <br />
            <br />
          </p>
        </div>
      </div>


    </section>
  </>
}

export { Section6 }