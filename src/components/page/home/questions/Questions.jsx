import classNames from 'classnames/bind';
import styles from './Questions.module.scss';
import { Accordion } from '../../../hooks/accordion/accordion';
import { data } from './data';
const cx = classNames.bind(styles);

const Questions = () => {
  return (
    <section className={cx('questions')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>FAQ</h2>
        <ul className={cx('list')}>
          {data.map((section, index) => (
            <Accordion key={index} section={section} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
