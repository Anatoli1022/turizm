import React from 'react';
import debounce from 'lodash/debounce';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import search from '../../../images/search.svg';

const cx = classNames.bind(styles);

const SearchBar = ({ data, setFilteredData }) => {
  const handleSearch = (event) => {
    const value = event.target.value;

    const filteredData = data.filter(
      (item) =>
        //where the search will be performed
        item.to.toLowerCase().includes(value) ||
        item.departure_date.toLowerCase().includes(value) ||
        item.from.toLowerCase().includes(value)
    );
    setFilteredData(filteredData);
  };
  const debouncedOnChange = debounce(handleSearch, 500);

  return (
    <div className={cx('wrapper-search')}>
      <input
        type="text"
        className={cx('search')}
        placeholder="Wyszukiwanie"
        onChange={debouncedOnChange}
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
