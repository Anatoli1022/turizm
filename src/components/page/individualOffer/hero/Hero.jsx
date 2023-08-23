import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    const response = await fetch(
      'https://turizm123.000webhostapp.com/php/mail.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  };

  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
