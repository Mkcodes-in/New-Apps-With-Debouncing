import { useState } from "react";
import Header from "./pages/Header";
import Content from "./pages/Content";

function App() {
  const [article, setArticle] = useState([]);

  return (
    <div>
        <Header 
        setArticle={setArticle}
        />
        <Content
        article={article}
        />
    </div>
  );
}

export default App;
