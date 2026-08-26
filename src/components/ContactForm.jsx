import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  
  // Estados para el Slider Captcha Antirobots
  const [isVerified, setIsVerified] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    if (value === 100) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Validar si el slider de seguridad fue completado al 100%
    if (!isVerified) {
      alert("Por favor desliza la barra de seguridad para verificar que no eres un robot.");
      return;
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setEnviado(true);
      setValidated(false);
    }
  };

  return (
    <div className="container my-5 py-4" id="contacto">
      <div className="row justify-content-center">
        <div className="col-lg-7 bg-white p-4 p-md-5 rounded-4 shadow-sm border">
          <h2 className="text-center fw-bold mb-4">Contáctanos</h2>
          
          {enviado && (
            <Alert variant="success" className="text-center">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control required type="text" placeholder="Ej. Juan Pérez" />
              <Form.Control.Feedback type="invalid">Por favor ingresa tu nombre.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control required type="email" placeholder="correo@ejemplo.com" />
              <Form.Control.Feedback type="invalid">Por favor ingresa un correo válido.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control required as="textarea" rows={4} placeholder="¿En qué podemos ayudarte?" />
              <Form.Control.Feedback type="invalid">Escribe un mensaje para continuar.</Form.Control.Feedback>
            </Form.Group>

            {/* SLIDER CAPTCHA DE SEGURIDAD ANTIBOTS */}
            <Form.Group className="mb-4 bg-light p-3 rounded border text-center">
              <Form.Label className="fw-bold d-block mb-2">
                {isVerified ? "✅ Verificación completada con éxito" : "🔒 Desliza para verificar que eres humano"}
              </Form.Label>
              <Form.Range 
                min="0" 
                max="100" 
                value={sliderValue} 
                onChange={handleSliderChange}
                className="form-range"
              />
              <small className="text-muted">
                {isVerified ? "Desbloqueado" : `Progreso: ${sliderValue}% (Arrastra hasta el 100%)` }
              </small>
            </Form.Group>

            <div className="d-grid">
              <Button 
                variant={isVerified ? "primary" : "secondary"} 
                type="submit" 
                size="lg"
                disabled={!isVerified}
              >
                {isVerified ? "Enviar Mensaje" : "Completa la verificación para enviar"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;