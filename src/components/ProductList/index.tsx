import React from 'react';

import { ReactComponent as FullStarIcon } from '../../assets/svg/estrela-cheia.svg';
import { ReactComponent as EmptyStarIcon } from '../../assets/svg/estrela.svg';
import { ProductItemProps, ProductListProps } from '../../interfaces';
import './style.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation]);

const ProductList: React.FC<ProductListProps> = (props) => {
  return (
    <section className="products-section">
      <div className="title">
        <div className="line"></div>
        <h1>Destaques {props.title ? `em ${props.title.toLowerCase()}` : ''}</h1>
      </div>
      <Swiper spaceBetween={32} slidesPerView={4} navigation className="products">
        {props.products.map(product => {
          return (
            <SwiperSlide className="item-wrapper" key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const fullStars = () => {
    const fullStars = [];
    for (let i = 1; i <= product.stars; i++) {
      fullStars.push(<FullStarIcon key={`${product.id}-fullStar${i}`} />);
    }
    return fullStars;
  }

  const emptyStars = () => {
    const emptyStars = [];
    const emptyStarsCount = 5 - product.stars;
    for (let i = 1; i <= emptyStarsCount; i++) {
      emptyStars.push(<EmptyStarIcon key={`${product.id}-emptyStar${i}`} />);
    }
    return emptyStars;
  }

  return (
    <>
      <div className="image-container">
        <img src={product.images[0] ? product.images[0].path : require('../../assets/images/product.jpg').default} alt="Imagem do Produto" />
      </div>

      <div className="product-content">
        <p>{product.name}</p>

        <div className="stars">
          {fullStars()}
          {emptyStars()}
        </div>

        <small className="discount">{product.promotional_price !== product.price ? Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ''}</small>

        <h1>{Number(product.promotional_price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>

        <small className="conditions">Ou {Number((Number(product.promotional_price) - Number(product.promotional_price) * 0.1).toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} com 10% off no boleto</small>

        <button type="button">Comprar</button>
      </div>
    </>
  );
}

export default ProductList;