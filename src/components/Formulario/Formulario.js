import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { addGoalAsync } from '../../reducers/goalsSlice';

function isBeforeToday(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Quita la hora
  const inputDate = new Date(dateString);
  inputDate.setHours(0, 0, 0, 0); // Quita la hora
  return inputDate < today;
}

function Formulario() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !dueDate) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (isBeforeToday(dueDate)) {
      setError('La fecha de vencimiento no puede ser anterior a hoy.');
      return;
    }

    dispatch(addGoalAsync({ title, description, dueDate }));
    setTitle('');
    setDescription('');
    setDueDate('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escriba Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Escriba Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!title || !description || !dueDate}>
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;