import Table from 'react-bootstrap/Table';

import { useState } from "react";
import data from "./data";

function BoardTable(params) {
  const [posts, setPosts] = useState(data.sort((a, b) => b.id - a.id));

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
        {posts.map((post) => {
          return (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BoardTable;
