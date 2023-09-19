import React, { useState } from 'react';
import axios from 'axios';
import styles from './VerificationForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const VerificationForm = () => {
  const [email, setEmail] = useState('');
  const [verificationSend, setVerificationSend] = useState(false);
  const [code, setCode] = useState('');
  // const [codeVerification, setCodeVerification] = useState(false);

  const sendVerificationEmail = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: email, // Поле 'to' - адрес получателя
      });

      if (response.status === 200) {
        alert('Verification email sent. Check your inbox for the link.');
        setVerificationSend(true);
      } else {
        alert('Failed to send verification email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending verification email:', error);
      alert('Failed to send verification email. Please try again later.');
    }
  };

  function verificationCode() {
    if (code == '12414') {
      // setCodeVerification(true);
      window.location.href = 'https://habr.com/ru/articles/519662/';
    } else {
      // setCodeVerification(false);
    }
  }

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Send Verification Email</h2>
      <form onSubmit={sendVerificationEmail} className={cx('form')}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={cx('button')}>
          Send Verification Email
        </button>{' '}
       
        {/* {codeVerification && (
          <a href="https://www.youtube.com/watch?v=ydPs2AdbW2k">Link pay</a>
        )} */}
      </form>
      {verificationSend && (
          <div className={cx('verification')}>
            <input
              placeholder="code"
              type="text"
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={verificationCode} type="button">
              Подтвердите код
            </button>
          </div>
        )}
    </div>
  );
};

export default VerificationForm;
