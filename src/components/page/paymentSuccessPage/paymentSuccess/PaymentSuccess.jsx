import React from 'react';
import classNames from 'classnames/bind';
import styles from './PaymentSuccess.module.scss';

import paymentSuccess from './images/paymentSuccess.png';
const cx = classNames.bind(styles);

const PaymentSuccess = () => {
  return (
    <section className={cx('payment-success')}>
      <div className={cx( 'payment-container')}>
        <img src={paymentSuccess} alt="payment success" className={cx('image')}/>
        <h1 className={cx('title')}>Płatność zakończona pomyślnie!</h1>
        <p className={cx('text')}>
          Twoja płatność została pomyślnie przetworzona. Dziękujemy za zapłatę
        </p>
      </div>
    </section>
  );
};

export default PaymentSuccess;
