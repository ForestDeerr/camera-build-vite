import { useState, useEffect } from 'react';
import { CameraType } from '../types/cameras';

import { isValidPhoneNumber } from '../utils/is-Valid-Phone-Number';
import { formatPhoneNumber } from '../utils/format-Phone-Number';
import { isEscapeKey } from '../utils/util';

import { remBasket } from '../store/api-actions';
import { store } from '../store';

type ModalWindowProps = {
  active: boolean;
  setActive: (isActive: boolean) => void;
  cameraCard: CameraType;

}


function ModalWindow({active, setActive, cameraCard}:ModalWindowProps): JSX.Element {
  const {name, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, level, category, price } = cameraCard;

  const onDocumentKeydown = (e) =>{
    if (isEscapeKey(e)) {
      document.body.style.overflow = '';
      setActive(false);
    }
  };

  useEffect(()=>{
    window.addEventListener('keydown', onDocumentKeydown);
    return ()=>{
      document.removeEventListener('keydown', onDocumentKeydown);
    };
  },[]);

  const closeModal = () =>{
    document.body.style.overflow = '';
    setActive(false);
  };

  const [number, setNumber] = useState('');


  return (
    <div className={`modal ${active ? 'is-active' : ''}`} >
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={()=>{
          {closeModal();}
        }}
        >
        </div>
        <div className="modal__content" >
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
                <img src="img/content/img1.jpg" srcSet={`${previewImg}, ${previewImg2x} 2x`} width="280" height="240" alt={name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{category}</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString()} ₽</p>
            </div>
          </div>
          <div className="custom-input form-review__item">
            <label>

              <span className="custom-input__label">Телефон
                <svg width="9" height="9" aria-hidden="true">
                  <use href="#icon-snowflake"></use>
                </svg>
              </span>
              <input type="tel" name="user-tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Введите ваш номер" required />
            </label>
            {!isValidPhoneNumber(number) && <p className="custom-input__error" style={{opacity:'1' }}>Нужно указать номер </p>}
          </div>
          <div className="modal__buttons">

            {isValidPhoneNumber(number) &&
            <button onClick={()=>{
              store.dispatch(remBasket(cameraCard));
              formatPhoneNumber(number);
              closeModal();
            }} className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Заказать
            </button> }
          </div>
          <button onClick={()=>{
            {closeModal();}
          }} className="cross-btn" type="button" aria-label="Закрыть попап"
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}
export default ModalWindow;
