import "./about.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">Acerca de nosotros</h2>
      <div className="about__text-container">
        {/* <img src="../../../../img/taco.png" alt="" className="taco" /> */}
        <p className="about__text">
          Nuestro local "El Mezquital" espera para ser tu nuevo destino para
          disfrutar de deliciosos tacos de barbacoa y carne asada. Nos
          enorgullece ofrecer una experiencia única, con taquitos que
          seguramente satisfarán tus antojos más exigentes.
        </p>
      </div>
    </section>
  );
};

export default About;
