import styles from "./DeleteModal.module.css";

export default function DeleteModal(props) {
  // const deleteArticle = () => {

  // }

  return (
    <div className={styles.deleteModal}>
      <p>게시글을 삭제하시겠습니까?</p>
      <div className={styles.deleteModal__buttons}>
        <button className={styles.buttons__yes}>예</button>
        <button className={styles.buttons__no}>아니오</button>
      </div>
    </div>
  );
}