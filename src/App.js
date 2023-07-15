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

export default function App() {
  data.sort((a, b) => b.id - a.id);
  const [articles, setArticles] = useState(data);

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
        <Route path="/content/:id" element={
          <main>
            <Article articles={articles} handleArticles={setArticles}/>
          </main>
        } />
        <Route path="/write" element={<Write articles={articles} handleArticles={setArticles}/>} />
        <Route path="/write/:id" element={<Write articles={articles} handleArticles={setArticles}/>} />
      </Routes>
    </div>
  );
}
