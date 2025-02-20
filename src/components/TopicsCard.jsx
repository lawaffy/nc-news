import { useNavigate } from "react-router-dom";

function TopicsCard({ topics }) {
  const navigate = useNavigate();

  return (
    <>
      {topics.map((topic) => (
        <section className="card" key={topic.slug}>
          <h3>Topic: {topic.slug}</h3>
          <p>About: {topic.description}</p>
          <button
            className="btn"
            onClick={() => navigate(`/articles/?topic=${topic.slug}`)}
          >
            View Articles by Topic
          </button>
        </section>
      ))}
    </>
  );
}

export default TopicsCard;
