import { useNavigate, useParams } from "react-router-dom";
import styles from "./Article.module.css";

function Article(props) {
  const { id } = useParams();
  const [article] = props.articles.filter((a) => a.id === Number(id));
  let navigate = useNavigate();

  return (
    <main className='Article'>
      <h2 className='article__title'>{article.title}</h2>
      <p className='article__date'>{article.date}</p>
      <hr/>
      <div className='article__content'>{article.content}</div>
      <div className={styles.article__btns}>
        <button className={styles.btns__prevBtn} onClick={ () => navigate(-1) }>목록으로</button>
        <div className={styles.btns__crtlBtns}>
          <button className={styles.btns__updateBtn} onClick={ () => navigate(-1) }>수정하기</button>
          <button className={styles.btns__deleteBtn} onClick={ () => navigate(-1) }>삭제하기</button>
        </div>
      </div>
    </main>
  );
}

export default Article;