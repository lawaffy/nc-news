import { useNavigate } from "react-router-dom";

function SingleArticleCard({ singleArticle, isLoading }) {
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading article...</p>;
  }

  const handleArticleComments = () => {
    navigate(`/articles/${singleArticle.article_id}/comments`, {
      state: { singleArticle: singleArticle },
    });
  };

  return (
    <article className="article-container">
      <h1 className="article-title">{singleArticle.title}</h1>
      <p className="article-topic">Topic: {singleArticle.topic}</p>
      <img
        className="article-image"
        src={singleArticle.article_img_url}
        alt={`Image for ${singleArticle.title}`}
      />
      <p className="article-content">{singleArticle.body}</p>

      <div className="article-info">
        <span className="article-votes">Upvotes: {singleArticle.votes}</span>
        <span className="article-comments">
          Comments: {singleArticle.comment_count}
        </span>
      </div>

      <div className="button-container">
        <button className="btn" onClick={handleArticleComments}>
          View Comments
        </button>
        <button className="btn" onClick={() => navigate("/articles")}>
          Back to Articles
        </button>
      </div>
    </article>
  );
}

export default SingleArticleCard;
