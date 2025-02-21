import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-proj-be-api.onrender.com/api",
});

export function getArticles(
  topic,
  sort_by,
  order,
  votes,
  created_at,
  comment_count,
  asc,
  desc
) {
  return ncNewsApi
    .get("/articles", {
      params: {
        topic,
        sort_by,
        order,
        votes,
        created_at,
        comment_count,
        asc,
        desc,
      },
    })
    .then((response) => {
      return response.data.articles;
    });
}

export function getSingleArticle(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

export function getArticleComments(article_id) {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

export function updateVoteCount(article_id, voteUpdate) {
  return ncNewsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: voteUpdate,
    })
    .then((response) => {
      return response.data.article;
    });
}

export function postComment(article_id, commentData) {
  return ncNewsApi.post(`/articles/${article_id}/comments`, commentData);
}

export function deleteComment(comment_id) {
  return ncNewsApi.delete(`/comments/${comment_id}`);
}

export function getTopics() {
  return ncNewsApi.get(`/topics`).then((response) => {
    return response.data.topics;
  });
}
