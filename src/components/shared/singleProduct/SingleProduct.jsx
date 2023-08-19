import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import styles from './SingleProduct.module.scss';

const cx = classNames.bind(styles);

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://turizm123.000webhostapp.com/php/transmitted_data/data_singleImage.php');
        const info = await res.json();
        setData(info);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  console.log(data);
  const params = useParams();
  // const navigate = useNavigate();

  const products = data.find((product) => product.slug === params.slug);

  // useEffect(() => {
  //   if (!products) {
  //     navigate('..', { relative: 'path' });
  //   }
  // }, [products, navigate]);

  return (
    <div className={cx('container', 'container-single-product')}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={products?.link}
            alt=""
            className={cx('image')}
            loading="eager"
          />
        </SwiperSlide>
      </Swiper>
      <div className={cx('product-wrapper')}>
        <p className={cx('description')}>{products?.description}</p>
        <h2>{products?.slug}</h2>

        <Link to=".." relative="path">
          All Products
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
