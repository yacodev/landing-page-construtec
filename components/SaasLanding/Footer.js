import React from 'react';
import Link from 'next/link';
import config from '../../utils/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className='footer-area pt-200'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <div className='footer-widget'>
                <div className='logo'>
                  <img
                    src='/images/logo_construtec_white.png'
                    alt='logo'
                    width='280px'
                  />
                </div>

                <p>
                  Somos una plataforma SaaS que ayuda a los ingenieros a
                  gestionar y elaborar sus informes mensuales de obra de manera
                  eficiente.
                </p>
              </div>
            </div>

            <div className='col-lg-5 col-sm-6'>
              <div className='row'>
                <div className='col-lg-6 col-sm-6'>
                  <div className='footer-widget'>
                    <h3 className='title'>Construtec</h3>
                    <ul className='footer-text'>
                      <li>
                        <a href={config.REGISTER_PLATFORM_URL} target='_blank'>
                          <i className='las la-angle-right'></i>
                          Registrate
                        </a>
                      </li>
                      <li>
                        <a href={config.LOGIN_PLATFORM_URL} target='_blank'>
                          <i className='las la-angle-right'></i>
                          Ingresar
                        </a>
                      </li>
                      <li>
                        <Link href='./terms'>
                          <a>
                            <i className='las la-angle-right'></i>
                            Terminos y condiciones
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <div className='footer-widget'>
                    <h3 className='title'>Enlaces</h3>
                    <ul className='footer-text'>
                      <li>
                        <a href='https://carlosyaco.com' target='_blank'>
                          <i className='las la-angle-right'></i>
                          carlosyaco.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 offset-sm-4 offset-lg-0'>
              <div className='footer-widget'>
                <h3 className='title'>Contactanos</h3>
                <p>(+51) 932001032</p>
                <p>hola@construtecperu.com</p>
                <ul className='footer-social'>
                  <li>
                    <a
                      className='bg-1'
                      href='https://www.facebook.com/ConstrutecPeru3'
                      target='_blank'
                    >
                      -<i className='lab la-facebook-f bg-3'></i>
                    </a>
                  </li>

                  <li>
                    <a
                      className='bg-3'
                      href='https://www.linkedin.com/company/constructec-perú'
                      target='_blank'
                    >
                      -<i className='lab la-linkedin-in bg-2'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className='bg-4'
                      href='https://www.youtube.com/channel/UCuquY3djKK46Enk6MNKIulw'
                      target='_blank'
                    >
                      -<i className='lab la-youtube bg-1'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='copyright-text'>
            <p>
              Copyright &copy; {currentYear} Todos los derechos reservados a{' '}
              <a href='https://hibootstrap.com/' target='_blank'>
                Construtec
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
