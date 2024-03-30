import React, { useState, useEffect } from "react";
import CardReview from "./cardReview/cardReview";
import "./reviews.css";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    };

    fetchData();
  }, []);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/reviews", {
        Message: newMessage
      });
      console.log("Mensaje enviado:", response.data);
      setReviews([...reviews, response.data]); // Actualizar el estado local con el nuevo comentario
      setNewMessage(""); // Limpiar el campo de entrada
    } catch (error) {
      console.error("Error al enviar el mensaje:", error, "Detalles del error:", error.response.data);
    }
  };

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h3>Comparte tu experiencia</h3>
        <div className="comments__container">
          {reviews.map((review, index) => (
            <CardReview key={index} message={review.Message} />
          ))}
        </div>
        <div className="input-container">
          <div className="form__group">
            <input
              type="text"
              className="form__field w-100"
              placeholder="Escribe tu mensaje aquí"
              value={newMessage}
              onChange={handleMessageChange}
            />
            <label htmlFor="name" className="form__label">
              Enviar Mensaje
            </label>
          </div>
          <button className="send__button" onClick={handleSubmit}>
            <img
              src="../../../../img/send.png"
              className="send__button-img"
              alt="Enviar"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
