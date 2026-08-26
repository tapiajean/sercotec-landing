function ServiceCard({ titulo, descripcion, imagen }) {
  return (
    <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease' }} 
         onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <img src={imagen} className="card-img-top" alt={titulo} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{titulo}</h5>
        <p className="card-text text-muted flex-grow-1">{descripcion}</p>
        
        {/* Aquí está el cambio: ahora es un enlace <a> con href="#contacto" */}
        <a href="#contacto" className="btn btn-primary mt-3">
          Contáctanos
        </a>

      </div>
    </div>
  );
}

export default ServiceCard;