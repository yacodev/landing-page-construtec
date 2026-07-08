import React from "react";

const Features = () => {
  return (
    <div id="features" className="features-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="row">
            <div className="features-card-content">
              <h2 className="title">¿A quién está dirigido?</h2>

              <div className="saas-features ">
                <div className="icon bg-1">
                  <i className="las la-file-alt"></i>
                </div>
                <h3>Empresas constructoras </h3>
                <p>
                  Constructoras que contratán con el estado la ejecución de
                  obras públicas,{" "}
                  <strong>
                    el software Construtec les permitirá gestionar todos sus
                    proyectos
                  </strong>
                  , conocer el estado actual de cada proyecto (valorización),
                  así como el estado de sus almacenes de cada obra (inventario
                  de materiales) y{" "}
                  <strong>
                    generar todos los reportes de valorizaciones y almacen
                    necesarios.
                  </strong>
                </p>
              </div>

              <div className="saas-features ">
                <div className="icon bg-2">
                  <i className="las la-pencil-alt"></i>
                </div>
                <h3>Entidades Estatales</h3>
                <p>
                  Instituciones públicas tipo Municipalidades, Gobiernos
                  regionales y Ministerios, podrán realizar sus{" "}
                  <strong>
                    valorizaciones de obra ejecutadas tanto por administración
                    directa o indirecta,
                  </strong>
                  asi como podrán realizar el control de su almacén,{" "}
                  <strong>
                    generar tus notas de entrada/salida, tu bincard digital y la
                    valorización de tu almacen.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
