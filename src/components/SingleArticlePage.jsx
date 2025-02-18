import SingleArticleList from "./SingleArticleList";
import { getSingleArticle } from "../utils/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleArticlePage() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getSingleArticle(article_id)
        .then((articleDataFromApi) => {
          setSingleArticle(articleDataFromApi);
          setIsLoading(false);
        })
        .catch((error) => {
          setError("Error fetching article");
          setIsLoading(false);
        });
    }, 500);
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading article...</h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <SingleArticleList
        singleArticle={singleArticle}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default SingleArticlePage;
