import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import CardRate from '../../components/card-rate';
import ProductTabs from '../../components/product-tabs';
import ReviewBlock from '../../components/review-block';
import ButtonUp from '../../components/button-up';
import Footer from '../../components/footer';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector} from '../../hooks';
import { fetchCameraAction, fetchRequests } from '../../store/api-actions';
import { store } from '../../store';

function Camera(): JSX.Element {
  const params = useParams();
  const cameraId = params.id;

  useEffect(() => {
    store.dispatch(fetchCameraAction(cameraId));
    store.dispatch(fetchRequests(cameraId));
  }, [cameraId]);

  const camera = useAppSelector((state)=>state.camera);
  const reviews = useAppSelector((state)=>state.reviews);

  if(!camera) {
    return <> Loading</>;
  }
  if(!reviews) {
    return <> Loading</>;
  }


  const {previewImgWebp, previewImgWebp2x, previewImg2x, rating, name, reviewCount, price} = camera;

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
                    <img src="img/content/img1.jpg" srcSet={`${previewImg2x} 2x`} width="560" height="480" alt={name} />
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
                  <ProductTabs camera={camera}/>
                </div>
              </div>
            </section>
          </div>
          <ReviewBlock reviews={reviews} />
        </div>
      </main>
      <ButtonUp />
      <Footer />
    </div>
  );
}

export default Camera;
