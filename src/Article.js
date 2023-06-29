import { useNavigate, useParams } from "react-router-dom";
import styles from "./Article.module.css";

function Article(props) {
  const { id } = useParams();
  const [article] = props.articles.filter((a) => a.id === Number(id));
  let navigate = useNavigate();

  return (
    <main className='Article'>
      <h1 className='article__title'>{article.title}</h1>
      <p className='article__date'>{article.date}</p>
      <hr/>
      <div className='article__content'>{article.content}</div>
      <button className={styles.article__prev} onClick={ () => navigate(-1) }>목록으로</button>
    </main>
  );
}

export default Article;