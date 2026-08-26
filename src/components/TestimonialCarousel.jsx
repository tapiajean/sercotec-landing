import Carousel from 'react-bootstrap/Carousel';

function TestimonialCarousel({ testimonios }) {
  return (
    <div className="container my-5" id="testimonios">
      <h2 className="text-center mb-4 fw-bold">Casos de Éxito en Video</h2>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Carousel className="bg-dark rounded-4 shadow overflow-hidden">
            {testimonios.map((testimonio) => (
              <Carousel.Item key={testimonio.id}>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src={testimonio.videoUrl} 
                    title={testimonio.titulo} 
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;