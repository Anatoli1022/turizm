import classNames from 'classnames/bind';
import styles from './header.module.scss';
import logo from '../../../images/logo.svg';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <navigation className={cx('navigation')}>
          <a href="/">
            <img src={logo} loading="eager" alt="" className={cx('logo')} />
          </a>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <a href="" className={cx('link')}>
                home
              </a>
            </li>
            <li className={cx('item')}>
              <a href="" className={cx('link')}>
                product
              </a>
            </li>
            <li className={cx('item')}>
              <a href="" className={cx('link')}>
                contact
              </a>
            </li>
          </ul>
        </navigation>
      </div>
    </header>
  );
};

export default Header;
