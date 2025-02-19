import SingleArticleCard from "../components/SingleArticleCard";

function SingleArticleList({ singleArticle, isLoading, error }) {
  if (isLoading) {
    return <p>Loading article...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!singleArticle) {
    return <p>No article data available.</p>;
  }

  return (
    <div className="cards-container">
      <SingleArticleCard article={singleArticle.article} />
    </div>
  );
}

export default SingleArticleList;
