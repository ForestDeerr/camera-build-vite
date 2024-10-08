import ModalWindow from './modal-window';
import CardRate from './card-rate';

import { CameraType } from '../types/cameras';
import { Link } from 'react-router-dom';
import { useState } from 'react';


type CardProps = {
  cameraCard: CameraType;
}

function Card({cameraCard}: CardProps): JSX.Element {
  const {name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, rating, reviewCount, price } = cameraCard;

  const [active, setActive] = useState(false);

  const openPopUp = () =>{
    setActive(!active);
    document.body.style.overflow = 'hidden';
  };


  return (
    <div className="product-card">
      <div className="product-card__img">
        <Link to={`camera/${cameraCard.id}`}>
          <picture>
            <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
            <img src="img/content/img1.jpg" srcSet={`${previewImg}, ${previewImg2x} 2x`} width="280" height="240" alt={name} />
          </picture>
        </Link>
      </div>
      <div className="product-card__info">
        <CardRate rating={rating} reviewCount={reviewCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString()} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button onClick={openPopUp} className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link to={`camera/${cameraCard.id}`} className="btn btn--transparent">Подробнее
        </Link>
      </div>
      <ModalWindow active={active} setActive={setActive} cameraCard={cameraCard}/>
    </div>

  );
}

export default Card;
