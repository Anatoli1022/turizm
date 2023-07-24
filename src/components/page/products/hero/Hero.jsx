import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Pagination from '../../../hooks/pagination/Pagination';
import SearchBar from '../../../hooks/searchBar/SearchBar';
// import background from './images/hero-background.jpg';

const cx = classNames.bind(styles);

const formatDate = (dateString) => {
  const dateParts = dateString.split('-');
  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];
  return `${day}.${month}.${year}`;
};

const Hero = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [sortState, setSortState] = useState({
    price: 'asc',
  });
  const [active, setActive] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://turizm.atwebpages.com/index.php');
        const info = await res.json();
        setData(info);
        setFilteredData(info);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const applySort = (column) => {
    setSortState((prevState) => ({
      ...prevState,
      [column]: prevState[column] === 'asc' ? 'desc' : 'asc',
    }));

    const sortedData = filteredData.slice().sort((a, b) => {
      const sortOrder = sortState[column] === 'asc' ? 1 : -1;

      if (column === 'price') {
        return sortOrder * (a.price - b.price);
      }

      return 0;
    });

    setFilteredData(sortedData);
  };

  const buttonActive = () => {
    if (active === '') {
      setActive('price-active');
    } else {
      setActive('');
    }
  };

  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <SearchBar data={filteredData} setFilteredData={setFilteredData} />

        <button
          className={cx('button', active === '' ? '' : 'price-active')}
          onClick={() => {
            applySort('price');
            buttonActive();
          }}
        >
          Filtruj według ceny
        </button>

        {/* <img src={background} className={cx('background-image')} alt="" loading="lazy" aria-hidden="true" /> */}
        <ul className={cx('list')}>
          {currentItems.map((product, index) => {
            const formattedDepartureDate = formatDate(product.departure_date);
            const formattedReturnDate = formatDate(product.return_date);

            return (
              <li key={index} className={cx('item')}>
                <Link to={product.slug} className={cx('link')}>
                  <img className={cx('image')} src={product.image} alt="" />
                  <div className={cx('information-wrapper')}>
                    <h3 className={cx('place')}>
                      {product.from}-{product.to}
                    </h3>
                    <div className={cx('information')}>
                      <span className={cx('date')}>
                        Wylot: {formattedDepartureDate}
                      </span>
                      <span className={cx('date')}>
                        Powrót: {formattedReturnDate}
                      </span>
                    </div>
                    <span className={cx('price')}>
                      Cena za osobę {product.price}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Hero;
