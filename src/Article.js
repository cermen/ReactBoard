import { useParams } from "react-router-dom";

function Article(props) {
  const { id } = useParams();
  const [article] = props.articles.filter((a) => a.id === Number(id));

  return (
    <main className='Article'>
      <h1 className='article__title'>{article.title}</h1>
      <p className='article__date'>{article.date}</p>
      <hr/>
      <div className='article__content'>{article.content}</div>
    </main>
  );
}

export default Article;