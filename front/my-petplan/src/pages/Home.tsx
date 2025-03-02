import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import welcomeImage from '../assets/welcomeCats.svg';



const Home: React.FC = () => {
  useEffect(() => {
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.parceiros', { origin: 'left', duration: 2000, distance: '20%' });
  }, []);

  return (
    <main id="content">
      <section id="home">
        <div className="shape"></div>
        <div id="cta">
          <h1 className="title">
            Cuide do seu pet com a <span>Petplan!!</span> da melhor forma
          </h1>
          <p className="description">
            Cadastre-se em nosso site e descubra como podemos facilitar a sua vida e a do seu pet! 🐾<br /><br />
            Oferecemos ferramentas para ajudá-lo a gerenciar e planejar os gastos com o seu pet, garantindo que você possa
            proporcionar o melhor cuidado possível sem estourar o orçamento.
          </p>
          <div id="cta_buttons">
            <a href="/login" className="btn-default">
              Login
            </a>
          </div>
          <div className="social-media-buttons">
            <a href="https://wa.me/"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com/"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
        <div id="banner">
          <img src={welcomeImage} alt="Bem-vindo" />
        </div>
      </section>

      <section id="menu">
        <h2 className="section-title">PetShops</h2>
        <h3 className="section-subtitle">Nossos Parceiros</h3>
      </section>
    </main>
  );
};

export default Home;
