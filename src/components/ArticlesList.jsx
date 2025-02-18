import ArticleCard from "./ArticlesCard";

function ArticlesList({ articles }) {
  return (
    <div className="cards-container">
      <ul>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))
        ) : (
          <p>Loading items...</p>
        )}
      </ul>
    </div>
  );
}

export default ArticlesList;
