import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import CardRate from '../../components/card-rate';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';

import { fetchListCameras } from '../../store/api-actions';

import { useState } from 'react';


function Camera(): JSX.Element {

  const params = useParams();
  const cameraId = params.id;

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchListCameras());
  }, [dispatch]);


  const cameras = useAppSelector((state)=>state.cameras);

  const camera = cameras.filter((item) => item.id === Number(cameraId))[0];

  const {previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, rating, name, reviewCount, price} = camera;

  const [toggle, setToggle] = useState(false);


  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
                    <img src="img/content/img1.jpg" srcSet={`${previewImg2x} 2x`} width="560" height="480" alt="Ретрокамера Das Auge IV" />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>

                  <CardRate rating={rating} reviewCount={reviewCount} />

                  <p className="product__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString()} ₽</p>
                  <button className="btn btn--purple" type="button">
                    <svg width="24" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"></use>
                    </svg>Добавить в корзину
                  </button>

                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button onClick={()=>{
                        setToggle(!toggle);
                      }} className={`tabs__control ${toggle ? 'is-active' : ''}`} type="button"
                      >Характеристики
                      </button>
                      <button onClick={()=>{
                        setToggle(!toggle);
                      }} className={`tabs__control ${toggle ? '' : 'is-active'}`} type="button"
                      >Описание
                      </button>
                    </div>
                    <div className="tabs__content">
                      <div className={`tabs__element ${toggle ? 'is-active' : ''}`}>

                        <ul className="product__tabs-list">
                          <li className="item-list"><span className="item-list__title">Артикул:</span>
                            <p className="item-list__text"> DA4IU67AD5</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Категория:</span>
                            <p className="item-list__text">Видеокамера</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">Коллекционная</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">Любительский</p>
                          </li>
                        </ul>
                        
                      </div>
                      <div className={`tabs__element ${toggle ? '' : 'is-active'}`}>
                        <div className="product__tabs-text">
                          <p>Немецкий концерн BRW разработал видеокамеру Das Auge IV в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор пользуется популярностью среди коллекционеров и&nbsp;яростных почитателей старинной техники.</p>
                          <p>Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь к&nbsp;наградам всех престижных кинофестивалей.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>


        </div>
      </main>
    </div>
  );
}

export default Camera;
