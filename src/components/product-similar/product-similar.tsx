import { Swiper, SwiperSlide } from 'swiper/react';
import Similar from './moc';

import 'swiper/css';
import './style.css';

const STARS_COUNT = 3;
const STARS = Array.from({ length: STARS_COUNT });

function ProductSimilar(): JSX.Element {

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {STARS.map(() => (
                <Similar />
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="title title&#45;&#45;h3">Похожие товары</h2>


          <Swiper
            slidesPerView={3}
            spaceBetween={36}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}

          >
            <SwiperSlide>
              <div className="product-card__img">
                <picture>
                  <source type="image/webp" srcSet="http://localhost:5173/img/content/img1.webp, img/content/img1@2x.webp 2x" />
                  <img src="http://localhost:5173/img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card__img">
                <picture>
                  <source type="image/webp" srcSet="http://localhost:5173/img/content/img1.webp, img/content/img1@2x.webp 2x" />
                  <img src="http://localhost:5173/img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card__img">
                <picture>
                  <source type="image/webp" srcSet="http://localhost:5173/img/content/img1.webp, img/content/img1@2x.webp 2x" />
                  <img src="http://localhost:5173/img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                </picture>
              </div>
            </SwiperSlide>


          </Swiper>


          <button className="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" disabled>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button className="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд">
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>

        </div>
      </section>
    </div>
  );
}

export default ProductSimilar;
