"informacion"
function About({ informacion }) {
  return (
    // Agregamos un id="nosotros" para que el botón de la Navbar pueda saltar hasta aquí
    <div className="container mt-5 mb-5" id="nosotros">
      <div className="row align-items-center bg-light p-5 rounded shadow-sm">
        
        {/* Lado izquierdo: Textos */}
        <div className="col-md-6">
          <h2 className="mb-4">Sobre Nosotros</h2>
          {/* Aquí inyectamos la descripción que pusimos en el JSON */}
          <p className="lead">{informacion.descripcion}</p>
          
          <ul className="list-unstyled mt-4">
            <li><strong>📍 Dirección:</strong> {informacion.direccion}</li>
            <li><strong>✉️ Correo:</strong> {informacion.correo}</li>
          </ul>
        </div>

        {/* Lado derecho: Imagen */}
        <div className="col-md-6 text-center">
          <img 
            src="/sercotec.img/Fachada.jpg" 
            alt="Fachada de Sercotec" 
            className="img-fluid rounded shadow"
          />
        </div>

      </div>
    </div>
  );
}

export default About;