import { CameraType } from '../types/cameras';
import Rate from './rate';

type CardProps = {
  cameraCard: CameraType;

}


function Card({cameraCard}: CardProps): JSX.Element {

  const {name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, rating, reviewCount, price } = cameraCard;

  const quantityStarsRating = [1, 2, 3, 4, 5];

  return (

    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src="img/content/img1.jpg" srcSet={`${previewImg}, ${previewImg2x} 2x`} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">


          {quantityStarsRating.map((camera, id) => (
            <Rate key={id} rating={rating} id={id}/>
          ))}


          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString()} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="#">Подробнее
        </a>
      </div>
    </div>

  );
}

export default Card;
