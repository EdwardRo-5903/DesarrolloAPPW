import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item({ name, description, dueDate }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem', backgroundColor: '#d4f8e8' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {description}
        </Card.Text>
        <Card.Text>
          <strong>Due Date:</strong> {dueDate}
        </Card.Text>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;