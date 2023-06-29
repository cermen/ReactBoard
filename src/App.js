import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import BoardTable from "./BoardTable";
import { Routes, Route, Link } from "react-router-dom";
import Article from "./Article";
import { useState } from "react";
import data from "./data";
import Write from "./Write";

function App() {
  const [articles, setArticles] = useState(data.sort((a, b) => b.id - a.id));

  return (
    <div className="App">
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="/">Board</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <BoardTable articles={articles}/>
            </main>
          }
        />
        <Route path="/content/:id" element={<Article articles={articles}/>} />
        <Route path="/write" element={<Write/>} />
      </Routes>
    </div>
  );
}

export default App;
