import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Card className="card">
      <Card.Img
        className="card-img"
        variant="top"
        src={article.article_img_url || null}
      />
      <Card.Body>
        <Card.Title>
          <h1>Title: {article.title}</h1>
        </Card.Title>
        <hr />
        <div>
          <Card.Title>Topic: {article.topic}</Card.Title>
        </div>
        <Card.Text>Upvotes: {article.votes}</Card.Text>
        <Card.Text>Comments: {article.comment_count}</Card.Text>

        <Link to={`/articles/${article.article_id}`}>
          <Button variant="primary">View Article</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
