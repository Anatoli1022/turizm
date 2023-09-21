import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import facebook from '../../../images/facebook.svg';
import messenger from '../../../images/messenger.svg';
import tiktok from '../../../images/tiktok.svg';
import whatsapp from '../../../images/whatsapp.svg';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container', 'footer-container')}>
        <div className={cx('contacts')}>
          <h3 className={cx('title')}>Obsługa Klienta</h3>
          <a href="tel:+48577141227" className={cx('link')}>
            +48 577 141 227
          </a>
          <a href="mailto:zapolujna.wakacje@gmail.com" className={cx('link')}>
            zapolujna.wakacje@gmail.com
          </a>
        </div>
        <div className={cx('social')}>
          <h3 className={cx('title')}>Bądź na bieżąco</h3>
          <div className={cx('icons')}>
            <a
              href="https://www.facebook.com/people/Zapoluj-Na-Wakacje/pfbid05VYFWrf76kDrYQhT25MgF9HkS7goiqZMKvWQmWZ1mMY9tAvQMhwEoiXehuUzxd9bl/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} loading="lazy" alt="facebook" />
            </a>
            <a
              href="https://www.messenger.com/t/100010889255784"
              target="_blank"
              rel="noreferrer"
            >
              <img src={messenger} loading="lazy" alt="facebook-messenger" />
            </a>
            <a
              href="https://www.tiktok.com/@zapolujna.wakacje?_t=8dqsGATSgRu&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tiktok} loading="lazy" alt="tiktok" />
            </a>

            <a
              href="https://wa.me/+48577141227"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} loading="lazy" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
