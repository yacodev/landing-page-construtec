import Link from 'next/link';
import React, { Component } from 'react';

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
              En esta sección puedes ver los precios de los planes de
              Constructec. Elige el plan que mejor se acomode a tus necesidades:
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
                Planes Anuales
                <span className='save-card'>
                  <span className='save'>Ahorra</span> 33%
                </span>
              </li>
            </ul>

            <div className='tab-content'>
              <div id='MonthlyPlan' className='tabs-item'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Gratis</h3>
                        <h4>S/. 0</h4>
                        <p>Por mes</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido por 30 días
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes crear un solo proyecto
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al Modulo almacén
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los reportes generados
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia 24/7
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          Acceso al módulo valorizaciones
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          Acceso al módulo financiero
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribrise</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Básico</h3>
                        <h4>S/.50</h4>
                        <p>Por Mes</p>
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
                          <i className='las la-check'></i>
                          Acceso al módulo almacen o valorizaciones o financiero
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
                          No puedes acceder a los tres módulos
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribirse</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Premium</h3>
                        <h4>S/. 100</h4>
                        <p>Por mes</p>
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
                          <i className='las la-check'></i>Acceso al módulo
                          financiero
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
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribirse</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='YearlyPlan' className='tabs-item'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Gratis</h3>
                        <h4>S/. 0</h4>
                        <p>Por Mes</p>
                      </div>

                      <ul>
                        <li>
                          <i className='las la-check'></i>
                          Valido por 30 días
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Puedes crear un solo proyecto
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Acceso al Modulo almacén
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Sin limites en los reportes generados
                        </li>
                        <li>
                          <i className='las la-check'></i>
                          Asistencia 24/7
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          Acceso al módulo valorizaciones
                        </li>
                        <li className='not-provide'>
                          <i className='las la-times'></i>
                          Acceso al módulo financiero
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribirse</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Basico</h3>
                        <h4>S/. 400 / año</h4>
                        <p>S/. 33/mes</p>
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
                          <i className='las la-check'></i>
                          Acceso al módulo almacen o valorizaciones o financiero
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
                          No puedes acceder a los tres módulos
                        </li>
                      </ul>

                      <div className='price-btn text-center'>
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribirse</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='prising-card pric-tabe'>
                      <div className='price-header text-center'>
                        <h3>Premium</h3>
                        <h4>S/. 800 / año</h4>
                        <p>S/. 66/mes</p>
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
                          <i className='las la-check'></i>Acceso al módulo
                          financiero
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
                        <Link href='#wait-list'>
                          <a className='default-btn bg-color'>Suscribirse</a>
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
