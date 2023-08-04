import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import Article from "./Article";
import ArticleDetails from "./ArticleDetails";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:articleId" element={<ArticleDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <HomePage />
      <About />
      <Contact /> */}
    </>
  );
}

export default App;
