import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { deleteComment } from "../utils/utils";

function DeleteComment({ comment_id, user }) {
  const { loggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (loggedInUser.username === user) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [showButton]);

  const handleDelete = () => {
    setLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => {
        setError("Error removing comment");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {showButton && (
        <div>
          {!success && !error && (
            <>
              <Button className="button-container" onClick={handleDelete}>
                Delete Comment
              </Button>
              {loading && <p className="text-muted">Deleting comment...</p>}
            </>
          )}
          {success && (
            <p className="text-success">Comment deleted successfully!</p>
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
      )}
    </>
  );
}

export default DeleteComment;
