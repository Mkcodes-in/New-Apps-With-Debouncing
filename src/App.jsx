import { useContext, useState } from "react";
import Header from "./pages/Header";
import Content from "./pages/Content";
import { ThemeContext } from "./context/ThemeChanger";

function App() {
  const [article, setArticle] = useState([]);
  const [loader, setLoader] = useState(false);
  const theme = useContext(ThemeContext);
  const mytheme = theme.theme;
  
  return (
    <div className={`${mytheme ? "bg-gray-950 text-white" : ""}`}>
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
