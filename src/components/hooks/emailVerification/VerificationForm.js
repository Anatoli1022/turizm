import React, { useState } from 'react';
import axios from 'axios';
import styles from './VerificationForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const VerificationForm = () => {
  const [email, setEmail] = useState('');
  const [sentSuccessfullyText, setSentSuccessfullyText] = useState('');
  const [verificationSend, setVerificationSend] = useState(false);
  const [code, setCode] = useState('');
  const [codeVerification, setCodeVerification] = useState(true);

  const sendVerificationEmail = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: email, // Поле 'to' - адрес получателя
      });

      if (response.status === 200) {
        setVerificationSend(true);
        setSentSuccessfullyText('E-mail wysłany pomyślnie ');
      }
    } catch (error) {
      setSentSuccessfullyText('Nie można wysłać e-maila spróbuj później');
    }
  };

  function verificationCode() {
    if (code == '12414') {
      window.location.href = 'https://habr.com/ru/articles/519662/';
    } else {
      setCodeVerification(false);
      setSentSuccessfullyText('Nieprawidłowy kod spróbuj ponownie');
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx(verificationSend ? 'email-wrapper' : null)}>
        {' '}
        <h2 className={cx('title')}>Wyślij E-Mail Weryfikacyjny</h2>
        <form onSubmit={sendVerificationEmail} className={cx('form')}>
          <input
            type="email"
            placeholder="Wpisz swój email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cx('input')}
          />
          <button type="submit" className={cx('button')}>
            Wyślij
          </button>
          {!verificationSend && (
            <p className={cx('information-text', 'information-text-error')}>
              {sentSuccessfullyText}
            </p>
          )}
        </form>
      </div>

      {verificationSend && (
        <div>
          <h2 className={cx('title')}>Wpisz kod z wiadomości</h2>
          <form className={cx('verification')}>
            <input
              placeholder="Сode"
              type="text"
              onChange={(e) => setCode(e.target.value)}
              className={cx('input')}
            />
            <button
              onClick={verificationCode}
              type="button"
              className={cx('button')}
            >
              Potwierdź kod
            </button>
            {verificationSend && (
              <p
                className={cx(
                  'information-text',
                  verificationSend && codeVerification
                    ? 'information-text-successfully'
                    : 'information-text-error'
                )}
              >
                {sentSuccessfullyText}
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default VerificationForm;
