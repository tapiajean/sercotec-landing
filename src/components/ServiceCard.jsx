import { Card, Button } from  'react-bootstrap';

function ServiceCard({ titulo, descripcion, imagen }) {

    return (
        <Card className="h-100" shadow="sm">
            <Card.Img variant="top" src={imagen} alt={titulo} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Button variant="primary" className="mt-auto">contactanos
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;