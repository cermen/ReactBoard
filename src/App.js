import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BoardTable from './BoardTable';

function App() {
  return (
    <div className="App">
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="#home">Board</Navbar.Brand>
        </Container>
      </Navbar>
      <section>
        <BoardTable/>
      </section>
    </div>
  );
}

export default App;
