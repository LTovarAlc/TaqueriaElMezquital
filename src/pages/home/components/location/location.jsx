import "./location.css";

const Location = () => {
  return (
    <section className="location">
      <h2>Visitanos</h2>
      <div className="location__bar">
        <div>
          <img
            src="../../../../../img/address.png"
            className="location__icon"
          />
          <span className="location__item-icon">
            <a className="location__link" href="https://www.google.com/maps?ll=25.756298,-100.248488&z=17&t=m&hl=es&gl=MX&mapclient=embed&q=Antiguo+Camino+Al+Mezquital+2204+Vicente+Guerrero+2do+Sector+66437+San+Nicol%C3%A1s+de+los+Garza,+N.L.">Antiguo Camino al Mezquital 2204</a>
          </span>
        </div>
        <div>
          <img
            src="../../../../../img/clock.png"
            className="location__icon"
          />
          <span className="location__item-icon">
            8:00 AM a 3:00 pm 
          </span>
        </div>
      </div>
      <div className="map__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.3579357739337!2d-100.2497056242274!3d25.756299302803257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb45f979fae5%3A0x114ece91ece7fc6a!2sAntiguo%20Camino%20Al%20Mezquital%202204%2C%20Vicente%20Guerrero%202do%20Sector%2C%2066437%20San%20Nicol%C3%A1s%20de%20los%20Garza%2C%20N.L.!5e0!3m2!1ses!2smx!4v1711481152370!5m2!1ses!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
