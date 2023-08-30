import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import Loading from '../../hooks/loading/Loading';

import styles from './SingleProduct.module.scss';

import classNames from 'classnames/bind';
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

  const singleInformation = products[0];

  const formatDate = (dateString) => {
    if (!dateString) {
      return '';
    }
    const dateParts = dateString.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    return `${day}.${month}.${year}`;
  };

  const formattedDepartureDate = formatDate(singleInformation?.departure_date);
  const formattedReturnDate = formatDate(singleInformation?.return_date);

  if (isLoading) {
    return <Loading />;
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
          <SwiperSlide>
            <img
              src={singleInformation.main_link}
              alt=""
              className={cx('image')}
              loading="eager"
            />
          </SwiperSlide>

          {products.map((product, i) => {
            return (
              <SwiperSlide key={i}>
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
          <SwiperSlide>
            <img
              src={singleInformation.main_link}
              alt=""
              className={cx('image')}
              loading="eager"
            />
          </SwiperSlide>

          {products.map((product, i) => {
            return (
              <SwiperSlide key={i}>
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
          <div>
            <h3 className={cx('title-place')}>
              {`${singleInformation.from} - ${singleInformation.to}`}
            </h3>
            <div className={cx('container-date')}>
              <span className={cx('date')}>
                <span>Wylot:</span>
                <span className={cx('date-number')}>
                  {formattedDepartureDate}
                </span>
              </span>
              <span className={cx('date')}>
                <span> Powrót:</span>
                <span className={cx('date-number')}>{formattedReturnDate}</span>
              </span>
            </div>
            <span className={cx('price')}>
              <span> Cena za osobę </span>{' '}
              <span className={cx('price-number')}>
                {singleInformation.price}zł
              </span>
            </span>
          </div>
          <button className={cx('button-buy')}>Kupić</button>
          <p className={cx('description')}>{singleInformation.description}</p>
        </div>
        <Link to=".." relative="path" className={cx('link')}>
          All Products
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
