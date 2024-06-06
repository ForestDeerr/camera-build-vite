// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

function Banner(): JSX.Element {

  const promo = useAppSelector((state)=>state.promo);

  if(!promo) {
    return <> Loading</>;
  }

  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {promo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="banner">
            <picture>
              <source type="image/webp" srcSet={`${item.previewImgWebp}, ${item.previewImgWebp2x} 2x`} />
              <img src={`${item.previewImg}`} srcSet={`${item.previewImg2x} 2x`} width="1280" height="280" alt="баннер" />
            </picture>
            <p className="banner__info"><span className="banner__message">Новинка!</span><span className="title title--h1">{item.name}</span>
              <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
              <Link to={`camera/${item.id}`} className="btn" >Подробнее</Link>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Banner;
