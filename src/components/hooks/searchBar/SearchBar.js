import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import search from '../../../images/search.svg';

const cx = classNames.bind(styles);

const SearchBar = ({ data, setFilteredData }) => {
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredData = data.filter(
      (item) =>
        //where the search will be performed
        item.description.toLowerCase().includes(keyword) ||
        item.from.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredData);
  };

  return (
    <div className={cx('wrapper-search')}>
      <input
        type="text"
        className={cx('search')}
        placeholder="Wyszukiwanie"
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
