import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './VerificationForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const VerificationForm = ({ link, showConfirmation, handleBuyButtonClick }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [verificationSend, setVerificationSend] = useState(false);
  const [code, setCode] = useState('');
  const [codeVerification, setCodeVerification] = useState(true);

  function clickClose() {
    setText('');
    setVerificationSend(false);
    handleBuyButtonClick();
    setEmail('');
  }

  const sendVerificationEmail = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: email, // Поле 'to' - адрес получателя
      });

      if (response.status === 200) {
        setVerificationSend(true);
        setText(`E-mail wysłany pomyślnie na ${email}`);
      }
    } catch (error) {
      setText('Nie można wysłać e-maila spróbuj później');
    }
  };

  async function verificationCode() {
    if (code === '12414') {
      try {
        const response = await axios.post(
          'http://localhost:4242/initiate-payment',
          {
            to: email, // Поле 'to' - адрес получателя
            link: link,
          }
        );

        if (response.status === 200) {
          // Перенаправить пользователя на страницу оплаты Stripe
          //   'https://buy.stripe.com/test_14k6p5d5aga5dfG8wx'
          window.location.href = response.data.paymentLink;
        }
      } catch (error) {
        console.error('Ошибка при инициировании оплаты:', error);
      }
    } else {
      setCodeVerification(false);
      setText('Nieprawidłowy kod spróbuj ponownie');
    }
  }

  return (
    <div className={cx('wrapper', showConfirmation ? 'visible' : 'notvisible')}>
      <div className={cx('container-verification')}>
        <button
          className={cx('close')}
          type="button"
          onClick={() => clickClose()}
        >
          &times;
        </button>
        <div className={cx(verificationSend ? 'email-wrapper' : null)}>
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
                {text}
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
                  {text}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationForm;
