import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesPage from "./components/ArticlesPage";
import SingleArticlePage from "./components/SingleArticlePage";
import CommentPage from "./components/CommentsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route
          path="/articles/:article_id/comments"
          element={<CommentPage />}
        />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
