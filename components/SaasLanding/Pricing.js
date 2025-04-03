import Link from "next/link";
import React, { Component } from "react";
import config from "../../utils/config";

const plansUsers = {
  warehousePlan: {
    title: "Módulo almacen",
    price: "S/. 25.0",
    description: "Puedes tener hasta un proyecto activo.",
  },
  valorizationPlan: {
    title: "Módulo valorizaciones",
    price: "S/. 25.0",
    description: "Puedes tener hasta un proyecto activo.",
  },
  premiumPlan: {
    title: "Premium",
    price: "S/. 35.0",
    description: "Puedes tener hasta un proyecto activo.",
  },
  warehouseAnnualPlan: {
    title: "Módulo almacen",
    monthlyPrice: "S/. 8/mes",
    annualPrice: "S/. 100.0 / año",
    description: "Puedes tener hasta un proyecto activo.",
  },
  valorizationAnnualPlan: {
    title: "Módulo valorizaciones",
    monthlyPrice: "S/. 8/mes",
    annualPrice: "S/. 100.0 / año",
    description: "Puedes tener hasta un proyecto activo.",
  },
  premiumAnnualPlan: {
    title: "Premium",
    monthlyPrice: "S/. 13/mes",
    annualPrice: "S/. 150.0 / año",
    description: "Puedes tener hasta un proyecto activo.",
  },
};

const plansEnterprise = {
  warehousePlan: {
    title: "Módulo Almacen - Constructoras",
    price: "S/. 150",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
  valorizationPlan: {
    title: "Valorizaciones - Constructoras",
    price: "S/. 150",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
  premiumPlan: {
    title: "Premium - Constructoras",
    price: "S/. 200",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
  warehouseAnnualPlan: {
    title: "Módulo Almacen - Constructoras",
    monthlyPrice: "S/. 1500/año",
    annualPrice: "S/. 125/mes",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
  valorizationAnnualPlan: {
    title: "Valorizaciones - Constructoras",
    monthlyPrice: "S/. 1500/año",
    annualPrice: "S/. 125/mes",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
  premiumAnnualPlan: {
    title: "Premium - Constructoras",
    monthlyPrice: "S/. 2000/año",
    annualPrice: "S/. 166/mes",
    description: "Puedes tener hasta cinco (5) proyectos activos.",
  },
};

const plansEnterpriseTenProjects = {
  warehousePlan: {
    title: "Módulo Almacen - Constructoras",
    price: "S/. 300",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
  valorizationPlan: {
    title: "Valorizaciones - Constructoras",
    price: "S/. 300",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
  premiumPlan: {
    title: "Premium - Constructoras",
    price: "S/. 400",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
  warehouseAnnualPlan: {
    title: "Módulo Almacen - Constructoras",
    monthlyPrice: "S/. 2500/año",
    annualPrice: " S/. 208/mes",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
  valorizationAnnualPlan: {
    title: "Valorizaciones - Constructoras",
    monthlyPrice: "S/. 2500/año",
    annualPrice: "S/. 208/mes",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
  premiumAnnualPlan: {
    title: "Premium - Constructoras",
    monthlyPrice: "S/. 3500/año",
    annualPrice: "S/. 291/mes",
    description: "Puedes tener hasta diez (10) proyectos activos.",
  },
};

const plansEnterpriseFifteenProjects = {
  warehousePlan: {
    title: "Módulo Almacen - Constructoras",
    price: "S/. 400",
    description: "Puedes tener hasta diez (15) proyectos activos.",
  },
  valorizationPlan: {
    title: "Valorizaciones - Constructoras",
    price: "S/. 400",
    description: "Puedes tener hasta quince (15) proyectos activos.",
  },
  premiumPlan: {
    title: "Premium - Constructoras",
    price: "S/. 600",
    description: "Puedes tener hasta quince (15) proyectos activos.",
  },
  warehouseAnnualPlan: {
    title: "Módulo Almacen - Constructoras",
    monthlyPrice: "S/. 3500/año",
    annualPrice: "S/. 291/mes",
    description: "Puedes tener hasta quince (15) proyectos activos.",
  },
  valorizationAnnualPlan: {
    title: "Valorizaciones - Constructoras",
    monthlyPrice: "S/. 3500/año",
    annualPrice: "S/. 291/mes",
    description: "Puedes tener hasta quince (15) proyectos activos.",
  },
  premiumAnnualPlan: {
    title: "Premium - Constructoras",
    monthlyPrice: "S/. 5500/año",
    annualPrice: "S/. 458/mes",
    description: "Puedes tener hasta quince (15) proyectos activos.",
  },
};
export default class Pricing extends Component {
  // Tab
  state = {
    showBusinessPlan: true,
    numberOfProjects: 5,
    ...plansEnterprise,
  };

  openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  handleSwitch = (e) => {
    if (!this.state.showBusinessPlan) {
      this.setState({
        ...plansEnterprise,
      });
    }

    if (this.state.showBusinessPlan) {
      this.setState({
        ...plansUsers,
      });
    }
    this.setState({ showBusinessPlan: !this.state.showBusinessPlan });
  };

  handleRange = (e) => {
    const numberOfProjects = e.target.value;
    switch (numberOfProjects) {
      case "5":
        this.setState({ ...plansEnterprise });
        break;
      case "10":
        this.setState({ ...plansEnterpriseTenProjects });
        break;
      case "15":
        this.setState({ ...plansEnterpriseFifteenProjects });
        break;
    }

    this.setState({ numberOfProjects: e.target.value });
  };

  render() {
    return (
      <div id="pricing" className="our-pricing-area bg-f8feff pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros precios</h2>
            <p>
              Contamos con planes mensuales y anuales, tanto para
              <strong>
                empresas constructoras como para entidades del estado, contamos
                con paquetes para gestionar 5, 10 , 15 o más obras.
              </strong>
              , para que puedas acceder a un módulo o a toda la plataforma.
              Elige el plan que mejor se acomode a tus necesidades
            </p>
          </div>

          <div className="tab pricing-tab">
            {/* <div className="container-switch">
              <span>
                <strong>Ingenieros / Arquitectos </strong>
              </span>
              <label className="switch" htmlFor="plansType">
                <input
                  type="checkbox"
                  onClick={(e) => this.handleSwitch(e)}
                  id="plansType"
                />
                <span className="slider round"></span>
              </label>
              <span>
                <strong>Constructoras</strong>
              </span>
            </div> */}
            {this.state.showBusinessPlan && (
              <div className="container-select-number-projects">
                <p>Elige el número de proyetos:</p>
                <input
                  type="range"
                  id="rangeInput"
                  min="5"
                  max="15"
                  step="5"
                  value={this.state.numberOfProjects}
                  onChange={(e) => this.handleRange(e)}
                />
                <div className="container-number-projects">
                  <p id="selectedValue">5</p>
                  <p id="selectedValue">10</p>
                  <p id="selectedValue">15</p>
                </div>
              </div>
            )}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "MonthlyPlan")}
              >
                Planes mensuales
              </li>
              <li onClick={(e) => this.openTabSection(e, "YearlyPlan")}>
                Planes anuales
                <span className="save-card">
                  <span className="save">Ahorra</span> 60%
                </span>
              </li>
            </ul>

            <div className="tab-content">
              <div id="MonthlyPlan" className="tabs-item">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.warehousePlan.title}</h3>
                        <h4>{this.state.warehousePlan.price}</h4>
                        <p>Por Mes</p>
                      </div>
                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>
                            {this.state.warehousePlan.description}
                          </strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Acceso al módulo almacen.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className="not-provide">
                          <i className="las la-times"></i>
                          No puedes acceder al módulo valorizaciones.
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
                            Suscribirsse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.valorizationPlan.title}</h3>
                        <h4>{this.state.valorizationPlan.price}</h4>
                        <p>Por Mes</p>
                      </div>
                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>
                            {this.state.valorizationPlan.description}
                          </strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Acceso al módulo valorizaciones.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className="not-provide">
                          <i className="las la-times"></i>
                          No puedes acceder al módulo almacen.
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.premiumPlan.title}</h3>
                        <h4>{this.state.premiumPlan.price}</h4>
                        <p>Por mes</p>
                      </div>
                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>{this.state.premiumPlan.description}</strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>Acceso al módulo
                          Almacen.
                        </li>
                        <li>
                          <i className="las la-check"></i>Acceso al módulo
                          Valorizaciones.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7.
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="YearlyPlan" className="tabs-item">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.warehouseAnnualPlan.title}</h3>
                        <h4>{this.state.warehouseAnnualPlan.monthlyPrice}</h4>
                        <p>{this.state.warehouseAnnualPlan.annualPrice}</p>
                      </div>
                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>
                            {this.state.warehouseAnnualPlan.description}
                          </strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Acceso al módulo almacen.
                        </li>

                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className="not-provide">
                          <i className="las la-times"></i>
                          No puedes acceder al módulo valorizaciones.
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.valorizationAnnualPlan.title}</h3>
                        <h4>
                          {this.state.valorizationAnnualPlan.monthlyPrice}
                        </h4>
                        <p>{this.state.valorizationAnnualPlan.annualPrice}</p>
                      </div>
                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>
                            {this.state.valorizationAnnualPlan.description}
                          </strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Acceso al módulo valorizaciones.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados.
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7.
                        </li>
                        <li className="not-provide">
                          <i className="las la-times"></i>
                          No puedes acceder al módulo almacen.
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
                            Suscribirse
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-card pric-tabe">
                      <div className="price-header text-center">
                        <h3>{this.state.premiumAnnualPlan.title}</h3>
                        <h4>{this.state.premiumAnnualPlan.monthlyPrice}</h4>
                        <p>{this.state.premiumAnnualPlan.annualPrice}</p>
                      </div>

                      <ul>
                        <li>
                          <i className="las la-check"></i>
                          <strong>
                            {this.state.premiumAnnualPlan.description}
                          </strong>
                        </li>
                        <li>
                          <i className="las la-check"></i>Acceso al módulo
                          Almacen
                        </li>
                        <li>
                          <i className="las la-check"></i>Acceso al módulo
                          Valorizaciones
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Sin limites en los resportes generados
                        </li>
                        <li>
                          <i className="las la-check"></i>
                          Asistencia técnica 24/7
                        </li>
                      </ul>

                      <div className="price-btn text-center">
                        <Link href={config.REGISTER_PLATFORM_URL}>
                          <a className="default-btn bg-color" target="_blank">
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
