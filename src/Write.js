import Form from 'react-bootstrap/Form';
import styles from "./Write.module.css";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Write({ articles, handleArticles }) {
  const { id } = useParams();
  const [article] = articles.filter((a) => a.id === Number(id));
  const navigate = useNavigate();

  const [title, setTitle] = useState(!id ? "" : article.title);
  const [content, setContent] = useState(!id ? "" : article.content);

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

  // 글 수정하기(Update)
  const updateArticle = () => {
    handleArticles(articles.map(a => {
      if (a.id === Number(id)) {
        return {
          ...a,
          title: title,
          content: content,
        };
      }
      return a;
    }))
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <main>
      <h2>{!id ? "새 글 작성" : "글 수정하기"}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control onChange={handleTitle} type="email" value={title}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control onChange={handleContent} as="textarea" rows={10} value={content}/>
        </Form.Group>
      </Form>
      <button onClick={() => {
        !id ? addArticle() : updateArticle();
        navigate('/');
      }} className={styles.add_btn}>{!id ? "등록하기" : "수정하기"}</button>
    </main>
  );
}

export default Write;