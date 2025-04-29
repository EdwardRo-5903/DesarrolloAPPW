import logo from './logo.svg';
import './App.scss';
import Item from './components/Item/Item';
import Menu from './components/Menu/Menu';
import Container from 'react-bootstrap/esm/Container';
import Formulario from './components/Formulario/Formulario';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
        <Col> <Formulario></Formulario> </Col>
        <Col> <Item name="Proyecto de Curso de desarrollo web" description="Elaborar una aplicación web en la que se pueda llevar control de mis metas y tareas personales" dueDate="31/05/2024"></Item>
            <Item name="Terminar de leer libro" description="Finalizar mi libro de react." dueDate="31/05/2024"></Item>
            <Item name="Subir Actividad 1" description="Responder el test en el GES correspondiente a la actividad 1" dueDate="31/05/2024"></Item>
            <Item name="Contestar test relacionado a la actividad 1" description="Ingresar al GES y responder test relacionado a la actividad 1" dueDate="31/05/2024"></Item> 
            </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
