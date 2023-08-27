import Loading from '../../hooks/loading/Loading';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://turizm123.000webhostapp.com/php/transmitted_data/data_singleProduct.php'
        );
        const info = await res.json();
        setData(info);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const params = useParams();

  const products = data.filter((data) => data.slug == params.slug);
  console.log(products);
  console.log(data);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!products) {
  //     navigate('..', { relative: 'path' });
  //   }
  // }, [products, navigate]);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className={cx('single-product')}>
      <div className={cx('container', 'wrapper')}>
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
          {products.slice(0, 1).map((product) => {
            return (
              <SwiperSlide>
                <img
                  src={product.main_link}
                  alt=""
                  className={cx('image')}
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
          {products.map((product) => {
            return (
              <SwiperSlide>
                <img
                  src={product.link}
                  alt=""
                  className={cx('image')}
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
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
          {products.slice(0, 1).map((product) => {
            return (
              <SwiperSlide>
                <img
                  src={product.main_link}
                  alt=""
                  className={cx('image')}
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
          {products.map((product) => {
            return (
              <SwiperSlide>
                <img
                  src={product.link}
                  alt=""
                  className={cx('image')}
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={cx('product-wrapper')}>
          <Link to=".." relative="path" className={cx('link')}>
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
