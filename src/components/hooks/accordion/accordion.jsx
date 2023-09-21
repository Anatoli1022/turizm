import React from 'react';
import styles from './accordion.module.scss';
import classNames from 'classnames/bind';
import useOpen from '../open/open';

const cx = classNames.bind(styles);

export const Accordion = ({ section }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <li className={cx('item', { active: isOpen === true })}>
      <Title question={section.question} isOpen={isOpen} toggle={toggle} />
      <Text text={section.text} />
    </li>
  );
};

export const Title = ({ question, toggle }) => {
  return (
    <h3 className={cx('item-title')} onClick={toggle}>
      {question}
    </h3>
  );
};

export const Text = ({ text }) => {
  return <p className={cx('item-text')}>{text}</p>;
};
