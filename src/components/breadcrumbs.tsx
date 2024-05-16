import { useLocation, Link } from 'react-router-dom';


function Breadcrumbs(): JSX.Element {

  const loc = useLocation();

  const crumds = loc.pathname.split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb)=>(
      <a key={crumb} className="breadcrumbs__link" href="index.html">{crumb}
        <svg width="5" height="8" aria-hidden="true">
          <use xlinkHref="#icon-arrow-mini"></use>
        </svg>
      </a>
    ));


  return (

    <div className="breadcrumbs">

      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            {crumds}
            <Link to={'/'} className="breadcrumbs__link" >Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
