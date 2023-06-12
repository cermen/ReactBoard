import Table from 'react-bootstrap/Table';
import './App.css';
import BoardTable from './BoardTable';

function App() {
  return (
    <div className="App">
      <header className='bg-info'>
        <div className='title'>Board</div>
      </header>
      <section>
        <BoardTable/>
      </section>
    </div>
  );
}

export default App;
