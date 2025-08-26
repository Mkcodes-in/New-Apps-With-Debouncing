import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY; 


export async function FetchNews(search){
  if(!search || search.trim() === ""){
    console.warn("Empty search please type something...");
    return [];
  }
  
  const base_url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}
`;

  try {
    const response = await axios.get(base_url);
    const data = response.data.articles;
    return data;

  } catch (error) {
    console.log("Error :", error);
  }
}
