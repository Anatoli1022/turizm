const stripe = require('stripe')(
  'sk_test_51O097SEqSHLNXXnjdETJMS4P4b2OOXbH5x6h7wb2IGhEyNL7CvFjJVHGwFMx9KOewCxT5OG591YXlGYtQpzXTSsM00t9Gw6xaP'
);
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4242;
app.use(cors({ origin: '*' }));

app.use(
  express.json({
    limit: '5mb',
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

// Этот эндпоинт будет обрабатывать запрос на инициирование оплаты
app.post('/initiate-payment', async (req, res) => {
  const {to, fromDeparture, toDeparture, toDate, returnDate } = req.body;
  const customer = await stripe.customers.create({
    name: to,
    email: to,
    description: `${fromDeparture} - ${toDeparture} | ${toDate} - ${returnDate}`,
  });
  try {
    // Создание сессии оплаты с помощью библиотеки Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card','blik'],
      customer_email: to, // Устанавливаем email клиента
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: `${fromDeparture} - ${toDeparture} | ${toDate} - ${returnDate}`,
              description: "Przypominamy, że na naszej stronie pobieramy tylko prowizję za dobór oferty. Linki do rezerwacji transferu oraz hotelu będą wysłane dopiero po weryfikacji transakcji, ale nie pózniej niż 24 godziny",
            },
            unit_amount: 15000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000', // Ссылка на успешную оплату
      cancel_url: 'http://localhost:3000', // Ссылка на отмену оплаты
      
    });

    res.json({ paymentLink: session.url });
  } catch (error) {
    console.error('Ошибка при создании сессии оплаты:', error);
    res.status(500).json({ error: 'Ошибка при создании сессии оплаты' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
