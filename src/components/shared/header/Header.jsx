import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme/useTheme';
import ButtonTheme from '../../hooks/buttonTheme';
import Menu from '../../hooks/menu';
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
            <li>
              <Link to="/" className={cx('link')}>
               Strona główna
              </Link>
            </li>
            <li>
              <Link to="/products" className={cx('link')}>
                Nasza oferta
              </Link>
            </li>
            <li>
              <Link to="/individualoffer" className={cx('link')}>
                Oferta spersonalizowana
              </Link>
            </li>
            <li>
              <ButtonTheme onClick={handleClick} className={cx('button-theme')} />
            </li>
          </ul>
          <div className={cx('mobile-menu-wrapper')}>
           
            <ButtonTheme onClick={handleClick} />
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
