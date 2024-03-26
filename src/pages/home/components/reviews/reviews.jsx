import "./reviews.css";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <h3>Comparte tu experiencia</h3>
        <div className="comments__container"></div>
        <div className="input-container">
          <div class="form__group">
            <input
              type="text"
              class="form__field w-100"
              placeholder="Input text"
            />
            <label for="name" class="form__label">
              Enviar Mensaje
            </label>
          </div>
          <button className="send__button">
              <img
                src="../../../../img/send.png"
                className="send__button-img"
              />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
