import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import ArticlesList from "./ArticlesList";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        <ArticlesList articles={articles} />
      </ul>
    </div>
  );
}

export default ArticlesPage;
