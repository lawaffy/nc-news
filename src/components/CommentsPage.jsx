import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getArticleComments } from "../utils/utils";
import CommentList from "./CommentList";
import CommentArticle from "./CommentArticle";
import { useNavigate } from "react-router-dom";
import PostComment from "./PostComment";
import ErrorComponent from "./ErrorComponent";

function CommentPage() {
  const navigate = useNavigate();
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  const location = useLocation();
  const { singleArticle } = location.state;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getArticleComments(article_id)
        .then((commentDataFromApi) => {
          setArticleComments(commentDataFromApi);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 500);
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading comments...</h2>;
  }

  if (error) {
    return (
      <>
        <ErrorComponent message={error.message} />
        <p>No comments found</p>
      </>
    );
  }

  return (
    <>
      <section className="comment-container">
        <CommentArticle singleArticle={singleArticle} />
        <PostComment />
        <CommentList articleComments={articleComments} isLoading={isLoading} />
        <button
          className="btn"
          onClick={() => navigate(`/articles/${singleArticle.article_id}`)}
        >
          Back to Article
        </button>
      </section>
    </>
  );
}

export default CommentPage;
