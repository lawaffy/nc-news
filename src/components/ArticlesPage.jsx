import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import ArticlesList from "./ArticlesList";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesFromApi) => {
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
