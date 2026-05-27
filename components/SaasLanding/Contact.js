import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Contactanos </h2>
            <p>
              Llámanos, escríbenos, sin ningún compromiso y consulta todas las
              dudas que puedas tener acerca de nosotros o nuestra plataforma.
              Elige la vía de contacto que prefieras, nosotros estaremos
              esperándote al otro lado.
            </p>
          </div>

          <div className="contact-content">
            <div className="row">
              <div className="col-lg-12 col-md-12 text-center">
                <a
                  href="https://api.whatsapp.com/message/5V4YWSJK6OP6G1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="default-btn">Contactar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
