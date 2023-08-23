import Link from 'next/link';
import React, { Component } from 'react';
import config from '../../utils/config';

export default class Pricing extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabs-item');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('fadeInUp');
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByTagName('li');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '');
    }

    document.getElementById(tabNmae).style.display = 'block';
    document.getElementById(tabNmae).className += ' fadeInUp animated';
    evt.currentTarget.className += 'current';
  };

  render() {
    return (
      <div id='pricing' className='our-pricing-area bg-f8feff pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Nuestros precios</h2>
            <p>
              Contamos con planes mensuales y anuales, para que puedas acceder a
              un módulo o a toda la plataforma. Elige el plan que mejor se
              acomode a tus necesidades:
            </p>
          </div>

          <div className='tab pricing-tab'>
            <ul className='tabs'>
              <li
                className='current'
                onClick={(e) => this.openTabSection(e, 'MonthlyPlan')}
              >
                Planes mensuales
              </li>
              <li onClick={(e) => this.openTabSection(e, 'YearlyPlan')}>
                Planes anuales
                <span className='save-card'>
                  <span className='save'>Ahorra</span> 40%
                </span>
              </li>
            </ul>

            <div className='tab-content'>
              <div id='MonthlyPlan' className='tabs-item'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Módulo almacen</h3>
                        <h4>S/.40</h4>
                        <p>Por Mes</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes tener hasta tres proyectos activos.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al módulo almacen.
                        </li>

                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          No puedes acceder al módulo valorizaciones,
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirsse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Módulo valorizaciones</h3>
                        <h4>S/.40</h4>
                        <p>Por Mes</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes tener hasta tres proyectos activos.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al módulo valorizaciones.
                        </li>

                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          No puedes acceder al módulo almacen,
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Premium</h3>
                        <h4>S/. 60</h4>
                        <p>Por mes</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes tener hasta tres proyectos activos.
                        </li>
                        <li>
                          <i className='las la-check'></i>Acceso al módulo
                          Almacen.
                        </li>
                        <li>
                          <i className='las la-check'></i>Acceso al módulo
                          Valorizaciones.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7.
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='YearlyPlan' className='tabs-item'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Módulo almacen</h3>
                        <h4>S/. 25/mes</h4>
                        <p>S/. 300 / año</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes tener hasta tres proyectos activos.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al módulo almacen.
                        </li>

                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          No puedes acceder al módulo valorizaciones
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Módulo valorizaciones</h3>
                        <h4>S/. 25/mes</h4>
                        <p>S/. 300 / año</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes tener hasta tres proyectos activos.
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al módulo valorizaciones.
                        </li>

                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          No puedes acceder al módulo almacen
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='pricing-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Premium</h3>
                        <h4>S/. 35/mes</h4>
                        <p>S/. 420 / año</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido mientras dure la suscripción
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes crear tres proyectos
                        </li>
                        <li>
                          <i className='las la-check'></i>Acceso al módulo
                          Almacen
                        </li>
                        <li>
                          <i className='las la-check'></i>Acceso al módulo
                          Valorizaciones
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los resportes generados
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia técnica 24/7
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className='default-btn bg-color' target='_blank'>
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
