function CommentCard({ comment }) {
  return (
    <article className="comment-card">
      <h3 className="comment-text">"{comment.body}"</h3>
      <p className="comment-author">Posted by: {comment.author}</p>
      <p className="comment-date">Posted on: {comment.created_at}</p>
      <p className="comment-upvotes">Upvotes: {comment.votes}</p>
    </article>
  );
}

export default CommentCard;
