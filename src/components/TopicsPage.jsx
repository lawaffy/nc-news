import { useState, useEffect } from "react";
import { getTopics } from "../utils/utils";
import TopicsCard from "./TopicsCard";
import ErrorComponent from "./ErrorComponent";

function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopics()
      .then((topicsDataFromApi) => {
        setTopics(topicsDataFromApi);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (loading) {
    return <h2>Loading topics...</h2>;
  }

  if (error) {
    return (
      <>
        <ErrorComponent message={error.message} />
        <p>Couldn't fetch topics</p>
      </>
    );
  }

  return (
    <>
      <TopicsCard className="cards-container" topics={topics} />
    </>
  );
}

export default TopicsPage;
