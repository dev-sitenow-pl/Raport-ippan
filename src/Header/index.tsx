import { Menu } from './Menu'

import './Header.scss'

const Header = () => {

  return <>
    <header className="nav-box" id="nav-header">
      <Menu />
    </header>
  </>
}

export { Header };