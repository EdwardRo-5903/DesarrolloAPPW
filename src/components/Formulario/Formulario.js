import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice';

function Formulario() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || !dueDate) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (new Date(dueDate) < new Date()) {
      setError('La fecha de vencimiento no puede ser anterior a hoy.');
      return;
    }

    dispatch(addGoal({ id: Date.now(), name, description, dueDate }));
    setName('');
    setDescription('');
    setDueDate('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Nombre de la meta"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Descripción de la meta"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="Fecha de vencimiento"
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!name || !description || !dueDate}>
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;