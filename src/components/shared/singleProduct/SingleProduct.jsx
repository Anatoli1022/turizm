import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SingleProduct.module.scss';

const cx = classNames.bind(styles);

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://turizm.atwebpages.com/index.php');
        const info = await res.json();
        setData(info);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  const params = useParams();
  // const navigate = useNavigate();

  const products = data.find((product) => product.slug === params.slug);

  // useEffect(() => {
  //   if (!products) {
  //     navigate('..', { relative: 'path' });
  //   }
  // }, [products, navigate]);

  return (
    <div className={cx('product-wrapper')}>
      <h1>{products?.lastName}</h1>
      <h2>{products?.slug}</h2>
      <h3>{products?.id}</h3>
      <Link to=".." relative="path">
        All Products
      </Link>
    </div>
  );
};

export default SingleProduct;
