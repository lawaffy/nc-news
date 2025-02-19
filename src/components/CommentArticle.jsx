function CommentArticle({ singleArticle }) {
  return (
    <article className="article-container">
      <header>
        <h1 className="article-title">{singleArticle.title}</h1>
        <p className="article-topic">Topic: {singleArticle.topic}</p>
      </header>

      <section className="article-content">
        <p>{singleArticle.body}</p>
      </section>

      <footer className="article-footer">
        <p className="article-upvotes">Upvotes: {singleArticle.votes}</p>
      </footer>
    </article>
  );
}

export default CommentArticle;
