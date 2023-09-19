import styles from './ButtonTheme.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ButtonTheme = ({ onClick }) => {
  return (
    <button id="switch" className={cx('switch')} onClick={onClick}>
      <span id="slider" />
      <span className={cx('slider', 'round')}></span>
    </button>
  );
};

export default ButtonTheme;
