import FormSearch from './form-search';

import { Link } from 'react-router-dom';


function Header(): JSX.Element {

  return (
    <header className="header" id="header">
      <div className="container">
        <Link to={'/'} className="header__logo" aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><Link to={'/'} className="main-nav__link">Каталог</Link>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Гарантии</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Доставка</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        <FormSearch />
      </div>
    </header>
  );
}

export default Header;
