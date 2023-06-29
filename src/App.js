import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import BoardTable from "./BoardTable";
import { Routes, Route, Link } from "react-router-dom";
import Article from "./Article";
import { useState } from "react";
import data from "./data";

function App() {
  const [articles, setArticles] = useState(data.sort((a, b) => b.id - a.id));
  console.log(articles);

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
              <BoardTable articles={articles}/>
            </main>
          }
        />
        <Route path="/content/:id" element={<Article articles={articles}/>} />
        <Route path="/write" element={<div>글 작성 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
