import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
const cx = classNames.bind(styles);

const AboutUs = () => {
  return (
    <section className={cx('about-us')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>O nas</h2>
        <div className={cx('text-wrapper')}>
          <p className={cx('text')}>
            Zapoluj na Wakacje to zespół doświadczonych entuzjastów podróży,
            którzy z pasją pomagają Wam w odnajdywaniu niepowtarzalnych okazji
            lotniczych, wyjątkowych miejsc noclegowych oraz wygodnych sposobów
            transportu, aby Wasze podróże były niezapomniane i dostosowane do
            Waszych potrzeb. Naszym celem jest umożliwienie Wam podróżowania w
            sposób nie tylko ekscytujący, ale także opłacalny.
          </p>{' '}
          <p className={cx('text')}>
            Niemniej jednak, ważne jest, abyście mieli pełną świadomość, że
            zgodnie z obowiązującym prawem z dnia 24 listopada 2017 roku, nie
            jesteśmy organizatorem imprez turystycznych. To oznacza, że nie
            zajmujemy się bezpośrednio sprzedażą biletów lotniczych,
            rezerwacjami hotelowymi ani organizacją transferów. Nasza rola
            polega na dostarczaniu Wam niezbędnych narzędzi, informacji i
            wskazówek, które umożliwią Wam samodzielne planowanie i rezerwowanie
            tych usług.
          </p>{' '}
          <p className={cx('text')}>
            Nasza misja polega na zapewnieniu Wam pełnej kontroli nad Waszymi
            podróżami, umożliwiając samodzielne podejmowanie decyzji. Dzięki
            naszej pomocy możecie dostosować każdy aspekt swojej podróży według
            własnych upodobań, co nie tylko pozwoli Wam spełnić marzenia o
            idealnych wakacjach, ale także zaoszczędzić znacząco na kosztach w
            porównaniu z gotowymi pakietami turystycznymi. Wierzymy, że
            podróżowanie powinno być dostępne dla wszystkich, dlatego staramy
            się uczynić je jak najbardziej przystępnym i satysfakcjonującym.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
