import { useState, useEffect } from "react";
import { getTopics } from "../utils/utils";
import TopicsCard from "./TopicsCard";

function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTopics()
      .then((topicsDataFromApi) => {
        setTopics(topicsDataFromApi);
      })
      .catch((error) => {
        setError("error fetching topics");
      });
  }, []);

  return (
    <>
      <TopicsCard className="cards-container" topics={topics} />
    </>
  );
}

export default TopicsPage;
