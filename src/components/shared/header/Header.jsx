import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme/useTheme';

const cx = classNames.bind(styles);

const Header = () => {
  const { theme, setTheme } = useTheme();
  function handleClick() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <Link to="/">
            <img src={logo} loading="eager" alt="" className={cx('logo')} />
          </Link>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <Link to="/" className={cx('link')}>
                home
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="/products" className={cx('link')}>
                product
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="/individualoffer" className={cx('link')}>
                oferta spersonalizowana
              </Link>
            </li>
            <li>
              <button onClick={handleClick}>afafaf</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
