import Table from 'react-bootstrap/Table';

import { useState } from "react";
import data from "./data";
import { useNavigate } from 'react-router-dom';
import styles from "./BoardTable.module.css";

export default function BoardTable(props) {
  let navigate = useNavigate();

  // 글 목록 보여주기 (Read)
  return (
    <>
    <header>
      <h2>글 목록</h2>
      <button className={styles.new_article_btn} onClick={ () => navigate("/write") }>새 글 작성</button>
    </header>
    <Table striped>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {props.articles.map((article) => {
          return (
            <tr>
              <td>{article.id}</td>
              <td className={styles.row__title} onClick={() => { navigate(`/content/${article.id}`) }}>{article.title}</td>
              <td>{article.date}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </>
  );
}
