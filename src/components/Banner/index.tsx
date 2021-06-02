import './style.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination]);

function Banner() {
  return (
    <Swiper pagination={{ clickable: true }} className="slider-box">
      <SwiperSlide className="slider">
        <img src={require('../../assets/images/banner.jpeg').default} alt="Banner" className="banner" />
        <div className="banner-text">
          <h1>Seus livros favoritos</h1>
          <p>estão te esperando aqui!</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider">
        <img src={require('../../assets/images/banner.jpeg').default} alt="Banner" className="banner" />
        <div className="banner-text">
          <h1>Seus livros favoritos</h1>
          <p>estão te esperando aqui!</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider">
        <img src={require('../../assets/images/banner.jpeg').default} alt="Banner" className="banner" />
        <div className="banner-text">
          <h1>Seus livros favoritos</h1>
          <p>estão te esperando aqui!</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider">
        <img src={require('../../assets/images/banner.jpeg').default} alt="Banner" className="banner" />
        <div className="banner-text">
          <h1>Seus livros favoritos</h1>
          <p>estão te esperando aqui!</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
