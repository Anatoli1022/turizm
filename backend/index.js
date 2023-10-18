const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const config = require('./config');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email,
    pass: config.password,
  },
});

app.options('/send-email', cors());

app.post('/send-email', (req, res) => {
  const { to } = req.body;

  const mailOptionsVerificationCode = {
    from: 'zapolujna.wakacje@gmail.com',
    to: to,
    subject: 'Kod weryfikacyjny',
    html: 'To Twój kod weryfikacyjny. Używamy go, aby upewnić się, że wpisałeś poprawny adres e-mail, ponieważ w przyszłości zostaną do niego wysłane linki do biletów. <br><strong>12414</strong> <br>Pozdrawiamy, <br>Zespół "Zapaluj na wakacje"',
  };

  transporter.sendMail(mailOptionsVerificationCode, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Ошибка при отправке письма' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Письмо успешно отправлено' });
    }
  });
});

app.options('/individual-offer', cors());

app.post('/individual-offer', (req, res) => {
  const {to} = req.body;

  const mailOptionIndividualOfferToClient = {
    from: 'zapolujna.wakacje@gmail.com',
    to: to,
    subject: 'Oferta spersonalizowana',
    html: 'Dzień dobry, <br>przetwarzamy Państwa zamówienie. Zespół Zapoluj na wakacje skontaktuje się z Państwem jak tylko znajdziemy ofertę która pasuje do Państwa kryteriów <br>Pozdrawiamy, <br>Zespół "Zapaluj na wakacje"',
  };

  transporter.sendMail(mailOptionIndividualOfferToClient, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Ошибка при отправке письма' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Письмо успешно отправлено' });
    }
  });
  
  const {name, when_od, when_do, direction, people, dining, budget, message} = req.body;

  const mailOptionIndividualOfferToAdmin = {
    from: 'zapolujna.wakacje@gmail.com',
    to: 'zapolujna.wakacje@gmail.com',
    subject: 'Oferta spersonalizowana',
    html: `Imię: ${name || 'N/A'} <br> Email: ${to} <br> Od kiedy: ${when_od || 'N/A'} <br> Do kiedy: ${when_do || 'N/A'} <br> Preferowane kierunki: ${direction || 'N/A'} <br> Ilość osób: ${people || 'N/A'} <br> Wyżywienie: ${dining || 'N/A'} <br> Иudżet: ${budget || 'N/A'} <br> Dodatkowe uwagi: ${message || 'N/A'} <br> `,
  };

  transporter.sendMail(mailOptionIndividualOfferToAdmin, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Ошибка при отправке письма' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Письмо успешно отправлено' });
    }
  });

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});