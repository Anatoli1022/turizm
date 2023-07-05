import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Product = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('error 404 , page not found');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://turizm.atwebpages.com/index.php');
        const info = await res.json();
        setData(info);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  console.log(data);
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
          {data.slice(0, 6).map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`products/${product.slug}`}>
                  <div className={cx('product-container')}>
                    <img className={cx('image')} alt="" src={product.image} />

                    <div className={cx('information-wrapper')}>
                      <h3 className={cx('title')}> {product.slug}</h3>
                      <p className={cx('information')}>{product.lastName}</p>
                      <p className={cx('price')}>{product.email}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
