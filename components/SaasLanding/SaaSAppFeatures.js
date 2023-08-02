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
              {/* <i className='lab la-buffer bg-1'></i> */}
              <i className='la-box bg-1'></i>
              <h3> Módulo Almacen</h3>
              <p>
                Podrás ingresar y dar salida a los materiales que se empleen en
                la obra, en cada momento podrás, ver los vincard de cada
                material. El software generará la valorización de almacén, los
                movimientos diarios, y las notas de entrada/salida.
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='saas-feature-two'>
              <i className='las la-pencil-alt bg-2'></i>
              <h3>Módulo Valorizaciones</h3>
              <p>
                Podrás ingresar diariamente los metrados ejecutados de cada
                partida. El CPIP automáticamente generará la valorización
                programada /mayores metrados/partidas nuevas y deductivos según
                el caso correspondientes.
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='saas-feature-two'>
              <i className='las la-dollar-sign bg-3'></i>
              <h3>Módulo financiero</h3>
              <p>
                Te permite ingresar todos los gastos realizados en la obra(orden
                de compra, orden de servicio, planillas y caja chica entre
                otros), clasificarlos según el tipo de gasto.
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='saas-feature-two'>
              <i className='las la-file-alt bg-4'></i>
              <h3> Módulo Reportes</h3>
              <p>
                Podrás pre visualizar, todos los formatos generados por el
                software, además tendrás acceso a reportes gráficos.
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
