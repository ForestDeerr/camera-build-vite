import CardRate from '../card-rate';

const STARS_COUNT = 5;
const STARS = Array.from({ length: STARS_COUNT });


function Similar(): JSX.Element {

  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet="http://localhost:5173/img/content/img1.webp, img/content/img1@2x.webp 2x" />
          <img src="http://localhost:5173/img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
        </picture>
      </div>
      {/* <div className="product-card__info">
        <CardRate rating={3} reviewCount={12}/>
        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
        </a>
      </div> */}
    </div>
  );
}

export default Similar;

