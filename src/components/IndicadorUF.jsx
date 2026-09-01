import React, { useState, useEffect } from 'react';

const IndicadorUf = () => {
  const [valorUf, setValorUf] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Consumiendo la API de indicadores (mindicador.cl / API de Gael)
    fetch('https://mindicador.cl/api/uf')
      .then((res) => res.json())
      .then((data) => {
        // Guardamos el valor actual de la UF del día
        setValorUf(data.serie[0].valor);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar la UF:', error);
        setCargando(false);
      });
  }, []);

  return (
    <div id="indicador-uf"style={{ padding: '20px', margin: '20px auto', maxWidth: '600px', background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', textAlign: 'center' }}>
      <h3 style={{ color: '#0056b3', marginBottom: '10px' }}>Simulador de Financiamiento Sercotec</h3>
      <p style={{ color: '#555', fontSize: '14px' }}>
        En este espacio puedes consultar el valor de la UF según corresponda para financiar tus proyectos.
      </p>
      
      <div style={{ background: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #ccc', marginTop: '15px' }}>
        {cargando ? (
          <p style={{ margin: 0, color: '#777' }}>Consultando valor actual de la UF...</p>
        ) : (
          <h4 style={{ margin: 0, color: '#28a745' }}>
            UF Hoy: ${valorUf ? valorUf.toLocaleString('es-CL') : 'No disponible'}
          </h4>
        )}
      </div>
    </div>
  );
};

export default IndicadorUf;