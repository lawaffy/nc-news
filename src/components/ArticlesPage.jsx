import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";
import ArticleFilter from "./ArticleFilter";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const votesQuery = searchParams.get("votes");
  const createdAtQuery = searchParams.get("created_at");
  const commentCountQuery = searchParams.get("comment_count");
  const ascQuery = searchParams.get("asc");
  const descQuery = searchParams.get("desc");

  useEffect(() => {
    setIsLoading(true);
    getArticles(
      topicQuery,
      sortByQuery,
      orderQuery,
      votesQuery,
      createdAtQuery,
      commentCountQuery,
      ascQuery,
      descQuery
    ).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [
    topicQuery,
    sortByQuery,
    orderQuery,
    votesQuery,
    createdAtQuery,
    commentCountQuery,
    ascQuery,
    descQuery,
  ]);

  if (isLoading) {
    return <h2>Loading articles...</h2>;
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
