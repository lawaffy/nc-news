import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-proj-be-api.onrender.com/api",
});

export function getArticles() {
  return ncNewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
}

export function getSingleArticle(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
}
