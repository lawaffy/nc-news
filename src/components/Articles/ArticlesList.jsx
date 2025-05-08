import ArticleCard from "./ArticlesCard";
import styles from "./Articles.module.css";

function ArticlesList({ articles }) {
  return (
    <div className={styles["cards-container"]}>
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
