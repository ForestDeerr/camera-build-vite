import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';


function BasketIcon(): JSX.Element {


  const basket = useAppSelector((state)=>state.basket);

  function quantityItemsInCart (quantityItems) {
    if (quantityItems > 0) {
      return <span className="header__basket-count">{quantityItems}</span>;
    } else {
      return null;
    }
  }


  return (

    <Link to={'/card'} className="header__basket-link">
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      {quantityItemsInCart (basket.length)}
    </Link>

  );
}

export default BasketIcon;
