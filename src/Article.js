import Form from 'react-bootstrap/Form';

function Article() {
  return (
    <main className='Article'>
      <h1 className='article__title'>Hello board!</h1>
      <p className='article__date'>2023년 6월 13일</p>
      <hr/>
      <div className='article__content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </main>
  );
}

export default Article;