import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import products from '../../../../data/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

const Product = () => {
  return (
    <section className={cx('product')}>
      <div className={cx('container')}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {products.slice(0, 6).map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={cx('product-container')}>
                  <img className={cx('image')} alt="" src={product.image} />

                  <div className={cx('information-wrapper')}>
                    <h3 className={cx('title')}> {product.slag}</h3>
                    <p className={cx('information')}>{product.lastName}</p>
                    <p className={cx('price')}>{product.email}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
