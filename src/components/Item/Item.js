import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { removeGoal, editGoal } from '../../reducers/goalsSlice';
import './item.scss';

function Item({ id, name, description, dueDate }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleRemove = () => {
    dispatch(removeGoal(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editGoal({ id, name: editedName, description: editedDescription, dueDate: editedDueDate }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(name);
    setEditedDescription(description);
    setEditedDueDate(dueDate);
    setIsEditing(false);
  };

  return (
    <Card className="goal-card">
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de vencimiento</Form.Label>
              <Form.Control
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-3">
              <Button variant="success" onClick={handleSave}>
                Guardar
              </Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <strong>Descripción:</strong> {description}
            </Card.Text>
            <Card.Text>
              <strong>Fecha de vencimiento:</strong> {dueDate}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={handleEdit}>
                Editar
              </Button>
              <Button variant="danger" onClick={handleRemove}>
                Eliminar
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Item;