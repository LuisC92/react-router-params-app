import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <Link to="/article/1">
        <h3>Artcile #1</h3>
      </Link>
      <Link to="/article/2">
        <h3>Artcile #2</h3>
      </Link>
      <Link to="/article/3">
        <h3>Artcile #3</h3>
      </Link>
    </div>
  );
};

export default Article;
