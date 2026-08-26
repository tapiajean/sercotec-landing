import NavigationBar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import data from './data/sercotec.json'; // Importamos tu "Base de datos"

function App() {
  // Extraemos los servicios del JSON
  const servicios = data.servicios;

  return (
    <div>
      <NavigationBar />
      
      <div className="container mt-5">
        <h1 className="text-center mb-4">Nuestros Servicios</h1>
        
        {/* Aquí creamos una cuadrícula (grid) de Bootstrap */}
        <div className="row">
          {servicios.map((servicio) => (
            <div className="col-md-4 mb-4" key={servicio.id}>
              {/* Llamamos a tu bloque de Lego y le pasamos los datos */}
              <ServiceCard 
                titulo={servicio.titulo} 
                descripcion={servicio.descripcion} 
                imagen={servicio.imagen} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
