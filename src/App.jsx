import { useState } from "react";
import Header from "./pages/Header";
import Content from "./pages/Content";

function App() {
  const [article, setArticle] = useState([]);
  const [loader, setLoader] = useState(false);

  return (
    <div>
        <Header 
        setArticle={setArticle}
        loader={loader}
        setLoader={setLoader}
        />
        <Content
        loader={loader}
        article={article}
        />
    </div>
  );
}

export default App;
