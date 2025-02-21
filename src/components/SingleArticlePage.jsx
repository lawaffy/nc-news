import { getSingleArticle, updateVoteCount } from "../utils/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import ErrorComponent from "./ErrorComponent";

function SingleArticlePage() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [vote, setVote] = useState(0);
  const [voteError, setVoteError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getSingleArticle(article_id)
        .then((articleDataFromApi) => {
          setSingleArticle(articleDataFromApi);
          setIsLoading(false);
          setVote(articleDataFromApi.votes);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 500);
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading article...</h2>;
  }

  if (error) {
    return (
      <>
        <ErrorComponent message={error.message} />
        <p>Couldn't fetch article</p>
      </>
    );
  }

  const handleUpvote = () => {
    setVote((currentVote) => currentVote + 1);
    setSingleArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + 1,
    }));

    updateVoteCount(article_id, 1).catch((err) => {
      setVote((currentVote) => currentVote - 1);
      setSingleArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes - 1,
      }));

      setVoteError("Error updating vote");
    });
  };

  const handleDownvote = () => {
    setVote((currentVote) => currentVote - 1);

    setSingleArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes - 1,
    }));

    updateVoteCount(article_id, -1).catch((err) => {
      setVote((currentVote) => currentVote + 1);
      setSingleArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes + 1,
      }));

      setVoteError("Error updating vote");
    });
  };

  return (
    <div className="article-container">
      <SingleArticleCard singleArticle={singleArticle} isLoading={isLoading} />
      <div className="button-container">
        <button className="btn" onClick={handleUpvote}>
          Add Upvote ↑
        </button>
        {voteError ? <p>{voteError}</p> : null}
        <button className="btn" onClick={handleDownvote}>
          Add Downvote ↓
        </button>
        {voteError ? <p>{voteError}</p> : null}
      </div>
    </div>
  );
}

export default SingleArticlePage;
