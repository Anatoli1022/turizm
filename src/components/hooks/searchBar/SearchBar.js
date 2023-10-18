import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import search from '../../../images/search.svg';

const cx = classNames.bind(styles);

const SearchBar = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const delay = 500;

  let debounceTimeout;

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchTerm(keyword);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      const filteredData = data.filter(
        (item) =>
          //where the search will be performed
          item.to.toLowerCase().includes(keyword) ||
          item.departure_date.toLowerCase().includes(keyword) ||
          item.from.toLowerCase().includes(keyword)
      );
      setFilteredData(filteredData);
    }, delay);
  };

  return (
    <div className={cx('wrapper-search')}>
      <input
        type="text"
        className={cx('search')}
        placeholder="Wyszukiwanie"
        value={searchTerm}
        onChange={handleSearch}
      />
      <img
        src={search}
        alt=""
        loading="eager"
        aria-hidden="true"
        className={cx('search-image')}
      />
    </div>
  );
};

export default SearchBar;
