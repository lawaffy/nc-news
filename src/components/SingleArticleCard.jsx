import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SingleArticleCard({ article, isLoading }) {
  if (isLoading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>Article not available</p>;
  }

  return (
    <div className="card-container">
      <Card className="card">
        <Card.Img
          className="card-img"
          variant="top"
          src={article.article_img_url}
        />
        <Card.Body>
          <Card.Title>
            <h1>Title: {article.title}</h1>
          </Card.Title>
          <hr />
          <div>
            <Card.Title>Topic: {article.topic}</Card.Title>
          </div>
          <Card.Text>Content: {article.body}</Card.Text>
          <Card.Text>Upvotes: {article.votes}</Card.Text>
          <Card.Text>Comments: {article.comment_count}</Card.Text>
        </Card.Body>
      </Card>

      <div className="button-container">
        <Link to="/articles">
          <Button variant="primary">Back to Articles</Button>
        </Link>
      </div>
    </div>
  );
}

export default SingleArticleCard;
