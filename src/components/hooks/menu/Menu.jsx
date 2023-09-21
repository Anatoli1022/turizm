import React, { useState, useEffect } from 'react';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Menu = () => {
  const [menu, setMenu] = useState('');

  const updateMenu = () => {
    if (menu === 'active') {
      setMenu('');
    } else {
      setMenu('active');
    }
  };

  useEffect(() => {
    if (menu === 'active') {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menu]);

  return (
    <div>
      <button
        className={cx('menu', { active: menu === 'active' })}
        onClick={updateMenu}
      >
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
      </button>
      <nav className={cx('navigation', { active: menu === 'active' })}>
        <ul className={cx('list')}>
          <li>
            <Link
              to="/"
              className={cx('item-link')}
              onClick={() => {
                updateMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={cx('item-link')}
              onClick={() => {
                updateMenu();
              }}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/individualoffer"
              className={cx('item-link')}
              onClick={() => {
                updateMenu();
              }}
            >
              Oferta spersonalizowana
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
