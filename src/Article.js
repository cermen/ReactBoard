import { useNavigate, useParams } from "react-router-dom";
import styles from "./Article.module.css";
import { useState } from "react";

export default function Article({ articles, handleArticles }) {
  const { id } = useParams();
  const [article] = articles.filter((a) => a.id === Number(id));
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const backToMain = () => navigate("/"); // 메인 페이지로 이동
  const toggleModal = () => setShowDeleteModal(!showDeleteModal); // 삭제 확인 창 띄우기/숨기기

  // 글 삭제하기 (Delete)
  const deleteArticle = () => {
    const newArticles = articles.filter((a) => a.id !== Number(id));
    backToMain();
    handleArticles(newArticles);
  };

  function DeleteModal() {
    return (
      <div className={styles.overlay}>
        <div className={styles.deleteModal}>
          <p className={styles.deleteModal__msg}>게시글을 삭제하시겠습니까?</p>
          <div className={styles.deleteModal__buttons}>
            <button className={styles.buttons__yes} onClick={deleteArticle}>
              예
            </button>
            <button className={styles.buttons__no} onClick={toggleModal}>
              아니오
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showDeleteModal && <DeleteModal />}
      <main className="Article">
        <h2 className="article__title">{article.title}</h2>
        <p className="article__date">{article.date}</p>
        <hr />
        <div className="article__content">{article.content}</div>
        <div className={styles.article__btns}>
          <button className={styles.btns__prevBtn} onClick={backToMain}>
            목록으로
          </button>
          <div className={styles.btns__crtlBtns}>
            <button
              className={styles.btns__updateBtn}
              onClick={() => navigate(`/write/${id}`)}
            >
              수정하기
            </button>
            <button className={styles.btns__deleteBtn} onClick={toggleModal}>
              삭제하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
