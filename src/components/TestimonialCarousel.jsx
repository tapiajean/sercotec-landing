import { Carousel } from 'react-bootstrap';

// 1. Recibimos la lista de testimonios como "prop"
function TestimonialCarousel({ testimonios }) {
  return (
    <div className="container mt-5 mb-5" id="testimonios">
      <h2 className="text-center mb-4">Casos de Éxito en Video</h2>
      
      {/* Carrusel oscuro para que los videos resalten */}
      <Carousel className="bg-dark rounded shadow-sm">
        
        {/* 2. El .map() lee el JSON y crea un video por cada uno */}
        {testimonios.map((testimonio) => (
          <Carousel.Item key={testimonio.id}>
            
            {/* 3. CLAVE PARA EL 100: "ratio ratio-16x9" hace que el video 
                 no se deforme en celulares (Usabilidad/Móvil) */}
            <div className="ratio ratio-16x9">
              <iframe 
                src={testimonio.videoUrl} 
                title={testimonio.titulo} // <- CLAVE PARA EL 100: "title" es obligatorio para Accesibilidad
                allowFullScreen
              ></iframe>
            </div>

          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}

export default TestimonialCarousel;