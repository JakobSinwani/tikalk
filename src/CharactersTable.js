import React from "react";
import { TABLE_COLUMNS } from "./services/api/rick_and_morty/constants";
import Table from "./components/table/Table";

function CharactersTable({ characters }) {
  const get_un_popular_characters = () => {
    return characters.filter((c) => c.episode.length === 1);
  };

  const create_rows = () => {
    const un_popular_characters = get_un_popular_characters();
    const rows = un_popular_characters.map((c) => ({
      character_name: c.name,
      origin_name: c.origin.name,
      origin_dimension: c.location.name,
      popularity: c.episode.length,
    }));
    return rows;
  };

  return <Table columns={TABLE_COLUMNS} rows={create_rows()} />;
}

export default CharactersTable;
