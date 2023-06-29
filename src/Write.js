import Form from 'react-bootstrap/Form';
import styles from "./Write.module.css";

function Write() {
  return (
    <main>
      <h2>새 글 작성</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <button className={styles.add_btn}>등록하기</button>
    </main>
  );
}

export default Write;