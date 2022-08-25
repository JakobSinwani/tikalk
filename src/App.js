import "./style/app.scss";
import { useEffect, useState } from "react";
import { get_un_popular_character } from "./services/api/rick_and_morty";
import CharactersTable from "./CharactersTable";
import CharactersChart from "./CharactersChart";

function App() {
  const [characters, setCharacters] = useState([]);
  async function init() {
    const data = await get_un_popular_character();
    console.log(data);
    setCharacters([...data]);
  }

  useEffect(() => {
    init().catch((e) => console.error(e));
  }, []);
  return (
    <div className="App">
      <p className={"app-title"}>Rick & Morty</p>
      <div className={"page-container"}>
        <CharactersTable characters={characters} />
        <CharactersChart characters={characters} />
      </div>
    </div>
  );
}

export default App;
