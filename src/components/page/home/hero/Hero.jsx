import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import background from './images/hero-background.jpg';

const cx = classNames.bind(styles);

const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container', 'hero-container')}>
        <h1 className={cx('title')}>
          Hello
          <span className={cx('title-span')}>summer</span>
        </h1>
        <p className={cx('text')}>"you have the courage to begin again."</p>
      </div>
      <img
        src={background}
        className={cx('background')}
        loading="eager"
        aria-hidden="true"
        alt=""
      />
    </section>
  );
};

export default Hero;
