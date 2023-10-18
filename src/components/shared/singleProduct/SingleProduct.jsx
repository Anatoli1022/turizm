import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import VerificationForm from '../../hooks/emailVerification/VerificationForm';
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://turizm123.000webhostapp.com/php/transmitted_data/data_singleProduct.php'
        );
        const info = await res.json();
        setData(info);
        setIsLoading(false);
      } catch {}
    }

    fetchData();
  }, []);

  const params = useParams();

  const products = data.filter((data) => data.slug.toString() === params.slug);

  //single info for one product
  const singleInformation = products[0];

  //reverse data
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

  //checkbox
  const [checked, setChecked] = useState(false);

  function changeCheckbox() {
    setChecked(!checked);
  }

  //

  const handleBuyButtonClick = () => {
    setShowConfirmation(!showConfirmation);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cx('single-product')}>
      <div className={cx('container', 'wrapper')}>
        <div className={cx('single-product-container')}>
          <div>
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
              spaceBetween={0}
              slidesPerView={8}
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
          </div>

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
                  <span className={cx('date-number')}>
                    {formattedReturnDate}
                  </span>
                </span>
              </div>
              <span className={cx('price')}>
                <span> Cena za osobę </span>{' '}
                <span className={cx('price-number')}>
                  {singleInformation.price}zł
                </span>
              </span>{' '}
              <button
                className={cx('button-buy', checked ? 'button-active' : null)}
                onClick={handleBuyButtonClick}
              >
                Kupić
              </button>
            </div>
            <div className={cx('wrapper-payment-information')}>
              <div className={cx('checkbox-container')}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={changeCheckbox}
                  className={cx('payment-checkbox')}
                />
                <label className={cx('checkbox-text')}>
                  <span className={cx('payment-star')}>*</span>
                  Oświadczam, że zapoznałem się z następującymi informacjami
                  dotyczącymi płatności za tę ofertę
                </label>
              </div>

              <p className={cx('payment-text')}>
                Opłata za usługę w znalezieniu najlepszej oferty w
                korzystniejszej cenie. Zapoluj na Wakacje nie pobiera żadnych
                opłat za bilety lotnicze, rezerwacje hoteli i transferu. Po
                dokonaniu płatności dostaną Państwo linki do samodzielnego
                zakupu biletów lotniczych, hotelu oraz transferu.
              </p>
            </div>
          </div>

          <VerificationForm
            handleBuyButtonClick={handleBuyButtonClick}
            showConfirmation={showConfirmation}
            link={singleInformation.link}
          />
        </div>
        <p className={cx('description')}>{singleInformation.description}</p>
        <Link to=".." relative="path" className={cx('link')}>
          All Products
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
