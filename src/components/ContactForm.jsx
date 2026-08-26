import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  // Aquí React "recuerda" los datos que escribe el usuario
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    servicio: '', // Más adelante conectaremos esto con las tarjetas
    mensaje: ''
  });

  // Aquí recordamos si hay que mostrar un mensaje de error o éxito
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  // Esta función actualiza los datos cada vez que el usuario teclea algo
  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // Esta función se ejecuta al apretar el botón "Enviar" (VALIDACIÓN PUNTO 10)
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Validar que no haya campos vacíos
    if (!datos.nombre || !datos.correo || !datos.mensaje) {
      setError('Por favor, completa todos los campos obligatorios.');
      setExito(false);
      return; // Detiene el envío
    }

    // 2. Validar que el correo tenga formato correcto (que tenga un @)
    if (!datos.correo.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setExito(false);
      return;
    }

    // Si pasa las pruebas de seguridad, simulamos el envío
    setError('');
    setExito(true);
    
    // Aquí es donde normalmente se enviaría a una base de datos real
    console.log("Datos enviados:", datos);
  };

  return (
    <div className="container mt-5 mb-5" id="contacto">
      <h2 className="text-center mb-4">Contáctanos</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8 bg-light p-4 rounded shadow-sm">
          
          {/* Mensajes de alerta visuales para el usuario */}
          {error && <Alert variant="danger">{error}</Alert>}
          {exito && <Alert variant="success">¡Mensaje enviado con éxito! Nos contactaremos pronto.</Alert>}

          <Form onSubmit={manejarEnvio}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                placeholder="Ej: Juan Pérez" 
                onChange={manejarCambio} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                name="correo" 
                placeholder="ejemplo@correo.com" 
                onChange={manejarCambio} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Servicio de Interés</Form.Label>
              <Form.Control 
                type="text" 
                name="servicio" 
                placeholder="¿Sobre qué servicio nos escribes?" 
                onChange={manejarCambio} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                name="mensaje" 
                placeholder="Escribe tu consulta aquí..." 
                onChange={manejarCambio} 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Enviar Mensaje
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;