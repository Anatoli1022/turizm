import React, { useState } from 'react';
import axios from 'axios';

const VerificationForm = () => {
  const [email, setEmail] = useState('');

  const [html, setHtml] = useState('Verification HTML Content'); // Добавляем поле для HTML-контента письма

  const sendVerificationEmail = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: email, // Поле 'to' - адрес получателя
        html: html, // Поле 'html' - HTML-контент письма
      });

      if (response.status === 200) {
        alert('Verification email sent. Check your inbox for the link.');
      } else {
        alert('Failed to send verification email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending verification email:', error);
      alert('Failed to send verification email. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Send Verification Email</h2>
      <form onSubmit={sendVerificationEmail}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="HTML Content"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
        <button type="submit">Send Verification Email</button>{' '}
      </form>
    </div>
  );
};

export default VerificationForm;
