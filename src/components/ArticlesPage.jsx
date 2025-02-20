import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading articles...</h2>;
  }

  return (
    <div>
      <ul>
        <ArticlesList articles={articles} />
      </ul>
    </div>
  );
}

export default ArticlesPage;
