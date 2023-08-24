import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import emailjs from 'emailjs-com'; // Import the EmailJS library

const cx = classNames.bind(styles);

const Hero = () => {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [when, setWhen] = useState(''),
    [direction, setDirection] = useState(''),
    [people, setPeople] = useState(''),
    [dining, setDining] = useState(''),
    [budget, setBudget] = useState(''),
    [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    try {
      await emailjs.send(
        'service_z87utcq', // Your EmailJS service ID
        'template_re54j3t', // Your EmailJS template ID
        {
          name: name,
          email: email,
          when: when,
          direction: direction,
          people: people,
          dining: dining,
          budget: budget,
          message: message,
        },
        'kL9gMMPRUTzr5AXLK' // Your EmailJS user ID
      );

      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setName('');
    setEmail('');
    setWhen('');
    setDirection('');
    setPeople('');
    setDining('');
    setBudget('');
    setMessage('');
  };

  return (
    <section className={cx('hero')}>
      <div className={cx('container', 'hero-container')}>
        <div className={cx('wrapper-text')}>
          <h1 className={cx('title')}>
            Napisz do nas, a my dobierzemy ofertę{' '}
            <span className={cx('title-span')}>specjalnie dla ciebie</span>
          </h1>
        </div>
        <div className={cx('wrapper-form')}>
          <form onSubmit={handleSubmit} className={cx('form')}>
            <div className={cx('wrapper-input')}>
              <input
                className={cx('form-input', 'input-name')}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={cx('form-input', 'input-email')}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              className={cx('form-input')}
              type="text"
              placeholder="Kiedy"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            />
            <input
              className={cx('form-input')}
              type="text"
              placeholder="Preferowane kierunki"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            />
            <input
              className={cx('form-input')}
              type="text"
              placeholder="Ile osób"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
            <input
              className={cx('form-input')}
              type="text"
              placeholder="Preferowane opcji wyżywienia"
              value={dining}
              onChange={(e) => setDining(e.target.value)}
            />
            <input
              className={cx('form-input')}
              type="text"
              placeholder="Budżet"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />

            <textarea
              className={cx('message')}
              placeholder="Dodatkowe uwagi"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={cx('button')}>
              wysłać
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;