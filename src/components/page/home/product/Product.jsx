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
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://zapolujnawakacje.000webhostapp.com/php/transmitted_data/data.php'
        );
        const info = await res.json();
        setData(info);
      } catch {
        alert('error 404 , page not found');
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
      if (width <= 767) {
        setSlidesPerView(1);
      } else if (width <= 1023) {
        setSlidesPerView(2);
      }

      if (width > 1023) {
        setSlidesPerView(3);
      } else if (width > 767) {
        setSlidesPerView(2);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
  }, [width]);

  return (
    <section className={cx('product')}>
      <div className={cx('container', 'wrapper')}>
        <h2 className={cx('title')}>Ostatnio dodane oferty</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
        >
          {data.slice(0, 6).map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`products/${product.slug}`} className={cx('link')}>
                  <div className={cx('product-container')}>
                    <img
                      className={cx('image')}
                      alt=""
                      src={product.main_link}
                    />
                    <h2 className={cx('image-title')}>{product.to}</h2>
                    <div className={cx('information-wrapper')}>
                      <h3 className={cx('card-title')}> {product.to}</h3>
                      <p className={cx('information')}>{product.description}</p>
                      <p className={cx('text')}>Dowiedz się więcej!</p>
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
