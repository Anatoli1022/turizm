import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import background from './images/hero-background.jpg';

const cx = classNames.bind(styles);

const formatDate = (dateString) => {
  const dateParts = dateString.split('-');
  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];
  return `${day}.${month}.${year}`;
};

const Hero = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        {/* <img src={background} className={cx('background-image')} alt="" loading="lazy" aria-hidden="true" /> */}
        <ul className={cx('list')}>
          {data.map((product, index) => {
            const formattedDepartureDate = formatDate(product.departure_date);
            const formattedReturnDate = formatDate(product.return_date);

            return (
              <li key={index} className={cx('item')}>
                <Link to={product.slug} className={cx('link')}>
                  <img className={cx('image')} src={product.image} alt="" />
                  <div className={cx('information-wrapper')}>
                    <h3 className={cx('place')}>
                      {product.from}-{product.to}
                    </h3>
                    <div className={cx('information')}>
                      <span className={cx('date')}>
                        Wylot: {formattedDepartureDate}
                      </span>
                      <span className={cx('date')}>
                        Powrót: {formattedReturnDate}
                      </span>
                    </div>
                    <span className={cx('price')}>
                      Cena za osobę {product.price}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
