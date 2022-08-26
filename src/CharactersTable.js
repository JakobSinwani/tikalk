import React from "react";
import { TABLE_COLUMNS } from "./services/api/rick_and_morty/constants";
import Table from "./components/table/Table";
import _ from "lodash";

function CharactersTable({ characters }) {
  const get_un_popular_characters = () => {
    const min_value = _.minBy(characters, (c) => c.episode.length).episode
      .length;

    return characters.filter((c) => c.episode.length === min_value);
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
  if (!characters.length) return null;
  return <Table columns={TABLE_COLUMNS} rows={create_rows()} />;
}

export default CharactersTable;
