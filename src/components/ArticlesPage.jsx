import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";
import ArticleFilter from "./ArticleFilter";
import ErrorComponent from "./ErrorComponent";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, sortByQuery, orderQuery)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  if (isLoading) {
    return <h2>Loading articles...</h2>;
  }

  if (error) {
    return (
      <>
        <ErrorComponent message={error.message} />
        <p>Couldn't fetch articles</p>
      </>
    );
  }

  return (
    <div>
      <ArticleFilter />
      <ul>
        <ArticlesList articles={articles} />
      </ul>
    </div>
  );
}

export default ArticlesPage;
