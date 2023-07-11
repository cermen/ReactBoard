import Form from 'react-bootstrap/Form';
import styles from "./Write.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Write({ articles, handleArticles }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 글 추가하기 (Create)
  const addArticle = () => {
    const ids = articles.map(a => a.id);
    const newId = Math.max(...ids) + 1;
    const now = new Date();
    const timeStr = now.toLocaleString();

    const newArticle = {
      id: newId,
      title: title,
      date: timeStr,
      content: content
    };

    const updatedArticles = [...articles, newArticle];
    updatedArticles.sort((a, b) => b.id - a.id);
    handleArticles(updatedArticles);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <main>
      <h2>새 글 작성</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control onChange={handleTitle} type="email"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control onChange={handleContent} as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <button onClick={() => {
        addArticle();
        navigate(-1);
      }} className={styles.add_btn}>등록하기</button>
    </main>
  );
}

export default Write;