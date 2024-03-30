import "./about.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="section__title">Nosotros</h2>
      <div className="about__text-container">
        {/* <img src="../../../../img/taco.png" alt="" className="taco" /> */}
        <p className="about__text">
          Nosotros "El Mezquital" te garantizamos una experiencia única con deliciosos taquitos que deleitaran tus antojos más exigentes
          <br />
          <br />
          Ven y comprueba la calidad de nuestros tacos de Barbacoa y carne
          asada, estamos seguros que te sorprenderá su delicioso sabor
        </p>
      </div>
    </section>
  );
};

export default About;
