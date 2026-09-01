import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiceCard from './components/ServiceCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import data from './data/sercotec.json';
import IndicadorUf from './components/IndicadorUF';

function App() {
  const servicios = data.servicios;
  const testimonios = data.testimonios;
  const empresa = data.empresa;


  return (
    <div>
      <NavigationBar />
      <Hero />
      <About informacion={empresa} />
      <IndicadorUf />
      
      <div className="container mt-5" id="servicios">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row">
          {servicios.map((servicio) => (
            <div className="col-md-4 mb-4" key={servicio.id}>
              <ServiceCard 
                titulo={servicio.titulo} 
                descripcion={servicio.descripcion} 
                imagen={servicio.imagen} 
              />
            </div>
          ))}
        </div>
      </div>

      <TestimonialCarousel testimonios={testimonios} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;