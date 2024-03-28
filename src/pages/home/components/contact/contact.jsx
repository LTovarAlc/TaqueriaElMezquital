import React from 'react';
import './contact.css';

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Dirección de correo electrónico copiada al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles: ', error);
      });
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Contactanos</h2>
      <div className="contact__info" onClick={() => copyToClipboard('TaqueriaElMezquital@gmail.com')}>
        <img src="../../../../../img/email.png" className="location__icon" alt="Icono de correo electrónico" />
        <span className="location__item-icon">TaqueriaElMezquital@gmail.com</span>
      </div>
      <div className="contact__info">
        <img src="../../../../../img/phone.png" className="location__icon" alt="Icono de teléfono" />
        <span className="location__item-icon">+51 8111111111</span>
      </div>
      <span className="contact__advertion">*Contacto para dudas*</span>
    </section>
  );
};

export default Contact;
