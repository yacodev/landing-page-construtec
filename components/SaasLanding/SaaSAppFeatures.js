import React from 'react';

const SaaSAppFeatures = () => {
  return (
    <div className='built-saas-app ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Contamos con los siguientes módulos:</h2>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <div className='saas-feature-two'>
              <i className='la-box bg-1'></i>
              <h3> Módulo Almacen</h3>
              <p>
                Podrás dar ingreso y salida a los materiales que se empleen en
                la obra, configurar tu almacén como nuevo o importar un almacén
                ya existente, ver el inventario de los materiales, clasificarlos
                por tipo y visualizar los correspondientes vincard de cada
                material.{' '}
                <strong>
                  El software Construtec generará la valorización de almacén,
                  los movimientos diarios,las notas de entrada y salida.
                </strong>
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='saas-feature-two'>
              <i className='las la-pencil-alt bg-2'></i>
              <h3>Módulo Valorizaciones</h3>
              <p>
                Podrás configurar tu presupuesto inicial de expediente técnico,
                presupuesto de mayores metrados, presupuesto de partidas nuevas,
                dar ingresar diariamente los metrados ejecutados de cada
                partida.{' '}
                <strong>
                  El software generará automáticamente la valorización de obra,
                  la de mayores mayores metrados, la valorización de partidas
                  nuevas y deductivos según corresponda.
                </strong>{' '}
                Tambien podrás diseñar tu formula polinómica, aplicar los
                reajustes por formula polinomica , configurar las amortizaciones
                y reajustes de valorización correspondientes. Esta orientado
                tanto para obra por administración directa o por contrata.
              </p>
            </div>
          </div>
        </div>

        <div className='parsonal-image'>
          <img
            src='/images/saas-img/saas-lp-display-construtec.png'
            alt='Image'
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSAppFeatures;
