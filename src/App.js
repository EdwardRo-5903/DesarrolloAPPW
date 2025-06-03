import React, { useEffect } from 'react';
import './App.scss';
import Item from './components/Item/Item';
import Menu from './components/Menu/Menu';
import Container from 'react-bootstrap/esm/Container';
import Formulario from './components/Formulario/Formulario';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoals, fetchGoals } from './reducers/goalsSlice';

function App() {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <Formulario />
          </Col>
          <Col>
            {goals.length > 0 ? (
              goals.map((goal) => (
                <Item
                  key={goal._id}
                  id={goal._id}
                  title={goal.title}
                  description={goal.description}
                  dueDate={goal.dueDate}
                />
              ))
            ) : (
              <p>No hay metas disponibles. Agrega una nueva meta.</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;