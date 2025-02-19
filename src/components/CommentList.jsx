import CommentCard from "./CommentCard";

function CommentList({ articleComments, isLoading }) {
  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <section className="comment-list">
      {articleComments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          isLoading={isLoading}
        />
      ))}
    </section>
  );
}

export default CommentList;
