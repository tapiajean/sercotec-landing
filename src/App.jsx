import NavigationBar from './components/Navbar';
import About from './components/About'; // 1. Importamos la sección Nosotros
import ServiceCard from './components/ServiceCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import data from './data/sercotec.json'; 
import ContactForm from './components/ContactForm'; // 1. Importamos el formulario de contacto
import Footer from './components/Footer'; // 1. Importamos el Footer

function App() {
  const servicios = data.servicios;
  const testimonios = data.testimonios; 
  const empresa = data.empresa; // 2. Extraemos los datos de la empresa

  return (
    <div>
      <NavigationBar />
      
      {/* 3. Colocamos la sección Nosotros aquí arriba */}
      <About informacion={empresa} /> 

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
  )
}

export default App;