import React from 'react';

import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => (
  <div className={cx('loading')}>
    <div className={cx('container')}>
      <svg viewBox="0 0 100 100" className={cx('loading-svg')}>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loading;
