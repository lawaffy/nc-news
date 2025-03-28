import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesPage from "./components/ArticlesPage";
import SingleArticlePage from "./components/SingleArticlePage";
import CommentPage from "./components/CommentsPage";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import TopicsPage from "./components/TopicsPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header>
          <Header />
        </header>

        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<SingleArticlePage />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentPage />}
          />
          <Route path="/topics" element={<TopicsPage />} />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </UserProvider>
  );
}

export default App;
