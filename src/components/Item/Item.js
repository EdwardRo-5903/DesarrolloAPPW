import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { removeGoalAsync, editGoalAsync } from '../../reducers/goalsSlice';
import './item.scss';

function Item({ id, title, description, dueDate }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleRemove = () => {
    dispatch(removeGoalAsync(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editGoalAsync({ _id: id, title: editedTitle, description: editedDescription, dueDate: editedDueDate }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
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
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
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
            <Card.Title>{title}</Card.Title>
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