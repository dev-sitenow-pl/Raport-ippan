import { useState, useEffect, useContext } from 'react';

import { MenuBtnMobile } from '../MenuBtnMobile'
import { TranslationContext } from '../../TranslationContext';
import LanguageSwitcher from '../../LanguageSwitcher';

const Menu = () => {
  const { translations } = useContext(TranslationContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {

        if (isOpen) {
          document.body.classList.add('open-menu');
        } else {
          document.body.classList.remove('open-menu');
        }
      } else {
        document.body.classList.remove('open-menu');
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(prevState => !prevState);
    }
  };

  const handleClick = (index: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {

    event.preventDefault();
    handleMenuToggle();
    let target = document.querySelector(`#sectionTarget__${index}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
    <nav className="menu">
      <MenuBtnMobile handleMenuToggle={handleMenuToggle} />
      <div className='menu-box-list'>
        <ul className="ul">
          {translations.menu.map((item, index) => (

            <li key={index}>
              <a href={`#sectionTarget__${index}`} onClick={handleClick(index)}>
                {item.liName}
              </a>
            </li>
          ))}
        </ul>
        <ul className="ul lang-list">
          <LanguageSwitcher />
        </ul>
      </div>
    </nav>
  </>
}

export { Menu };