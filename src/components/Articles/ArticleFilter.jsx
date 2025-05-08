import { useSearchParams } from "react-router-dom";

function ArticleFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  const handleSortBy = (sortBy) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
  };

  const handleOrder = (order) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  };

  return (
    <section>
      {!topicQuery && (
        <>
          <h3>Sort By:</h3>
          <button onClick={() => handleSortBy("votes")}>Votes</button>
          <button onClick={() => handleSortBy("comment_count")}>
            Comment Count
          </button>
          <button onClick={() => handleSortBy("created_at")}>Date</button>
          <h3>Order:</h3>
          <button onClick={() => handleOrder("asc")}>Ascending</button>
          <button onClick={() => handleOrder("desc")}>Descending</button>
        </>
      )}
    </section>
  );
}

export default ArticleFilter;
