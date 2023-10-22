import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

const Hero = () => {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [when_od, setWhen_od] = useState(''),
    [when_do, setWhen_do] = useState(''),
    [direction, setDirection] = useState(''),
    [people, setPeople] = useState(''),
    [dining, setDining] = useState(''),
    [budget, setBudget] = useState(''),
    [message, setMessage] = useState(''),
    [sendSuccessfully, setSendSendSuccessfully] = useState(),
    [sendFailed, setSendFailed] = useState();

  const sendIndividualOffer = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    try {
      const response = await axios.post(
        'http://localhost:3001/individual-offer',
        {
          name: name,
          to: email,
          when_od: when_od,
          when_do: when_do,
          direction: direction,
          people: people,
          dining: dining,
          budget: budget,
          message: message,
        }
      );
      if (response.status === 200) {
        setSendSendSuccessfully(true);
        setTimeout(() => setSendSendSuccessfully(false), 5000);
      }
    } catch (error) {
      setSendFailed(true);
      setTimeout(() => setSendFailed(false), 5000);
    }

    setName('');
    setEmail('');
    setWhen_od('');
    setWhen_do('');
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
            <span className={cx('title-span')}>specjalnie dla Ciebie</span>
          </h1>
        </div>
        <div className={cx('wrapper-form')}>
          <form onSubmit={sendIndividualOffer} className={cx('form')}>
            <div className={cx('wrapper-input')}>
              <input
                className={cx('form-input')}
                type="text"
                placeholder="Imię"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={cx('form-input')}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={cx('wrapper-date')}>
              <p className={cx('text')}>Kiedy: </p>
              <label className={cx('label-date')}>
                <span className={cx('span-date')}>od</span>
                <input
                  className={cx('form-input', 'form-input-date')}
                  type="date"
                  value={when_od}
                  onChange={(e) => setWhen_od(e.target.value)}
                />
              </label>{' '}
              <label className={cx('label-date')}>
                <span className={cx('span-date')}>do</span>
                <input
                  className={cx('form-input', 'form-input-date')}
                  type="date"
                  value={when_do}
                  onChange={(e) => setWhen_do(e.target.value)}
                />{' '}
              </label>
            </div>
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
              Wysłać
            </button>
          </form>
          {sendSuccessfully && (
            <p className={cx('email-send', 'successfully')}>
              E-mail wysłany pomyślnie
            </p>
          )}
          {sendFailed && (
            <p className={cx('email-send', 'failed')}>
              Nie można wysłać e-maila spróbuj ponownie
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
