import Table from 'react-bootstrap/Table';

import { useState } from "react";
import data from "./data";
import { useNavigate } from 'react-router-dom';
import styles from "./BoardTable.module.css";

function BoardTable(props) {
  let navigate = useNavigate();

  return (
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
  );
}

export default BoardTable;
