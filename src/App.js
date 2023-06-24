import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import BoardTable from "./BoardTable";
import { Routes, Route, Link } from "react-router-dom";
import Article from "./Article";

function App() {
  return (
    <div className="App">
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="#home">Board</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <BoardTable />
            </main>
          }
        />
        <Route path="/content" element={<Article/>} />
        <Route path="/write" element={<div>글 작성 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
