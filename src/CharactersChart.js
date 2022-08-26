import React, { useEffect, useState } from "react";
import Chart from "./components/chart/Chart";
import { REQUIRED_NAMES } from "./services/api/rick_and_morty/constants";

function CharactersChart({ characters }) {
  const create_columns_by_episode_length = () => {
    const edited_characters = characters.map(({ name, episode }) => ({
      name,
      count: episode.length,
    }));
    const required_characters = edited_characters.filter(({ name }) =>
      REQUIRED_NAMES.includes(name)
    );
    set_chart_data([...required_characters]);
  };

  const [chart_data, set_chart_data] = useState([]);

  useEffect(create_columns_by_episode_length, [characters]);
  return <Chart data={chart_data} countSize={70} title={"Popularity"} />;
}

export default CharactersChart;
