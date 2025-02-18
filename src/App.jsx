import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesPage from "./components/ArticlesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
