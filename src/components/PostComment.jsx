import { useState } from "react";
import { postComment } from "../utils/utils";
import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams();

  const [commentData, setCommentData] = useState({
    body: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    postComment(article_id, commentData)
      .then(() => {
        setSuccess(true);
        setCommentData({
          body: "",
          username: "",
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        setError("Error posting comment");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={commentData.username}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="text"
          name="body"
          placeholder="Enter your comment"
          value={commentData.body}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "submitting..." : "submit"}
        </button>
      </form>
      {loading && <p>Submitting comment...</p>}
      {success && <p>Comment submitted successfully!</p>}
      {error && <p className="text-danger">{error}</p>}
    </>
  );
}

export default PostComment;
