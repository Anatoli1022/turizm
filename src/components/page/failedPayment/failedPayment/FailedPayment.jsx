import React from 'react';
import classNames from 'classnames/bind';
import styles from './FailedPayment.module.scss';
import failed from './images/failed.png';

const cx = classNames.bind(styles);

const FailedPayment = () => {
  return (
    <section className={cx('payment-success')}>
      <div className={cx('payment-container')}>
        <img src={failed} alt="payment not success" className={cx('image')} />
        <h1 className={cx('title')}>Płatność nie jest zakończona!</h1>
        <p className={cx('text')}>
          Nie udało się zakończyć płatności. Spróbuj ponownie
        </p>
      </div>
    </section>
  );
};

export default FailedPayment;
