import {
  EARTH_C_137_ID,
  MORTY_ID,
  RICK_AND_MORTY_END_POINTS,
  RICK_ID,
} from "./constants";
import { fetch_url } from "../../../utils/fetch_functions";

const { characters, episodes, locations } = RICK_AND_MORTY_END_POINTS;

export const get_un_popular_character = async () => {
  const characters = await get_EarthC137_characters_data();
  const sorted_characters = sort_by_unpopular(characters);
  return sorted_characters;
};

export const get_character_id_from_url = (url) => {
  const pattern = /\/([^\/]+)\/?$/;
  return url.match(pattern)[1];
};

export const get_EarthC137_characters_ids = async () => {
  const earth_c_137_location = await get_location_by_id(EARTH_C_137_ID);
  const ids = earth_c_137_location.residents.map(get_character_id_from_url);
  return [MORTY_ID, RICK_ID, ...ids];
};

export const get_EarthC137_characters_data = async () => {
  const ids = await get_EarthC137_characters_ids();
  return await get_multiple_characters(ids);
};

export const sort_by_unpopular = (characters) => {
  return characters.sort((a, b) => a.episode.length - b.episode.length);
};

export const get_location_by_id = async (location_id) => {
  return await fetch_url({
    url: locations + "/" + location_id,
  });
};
export const get_multiple_characters = async (characters_ids) => {
  characters_ids = characters_ids.join(",");
  return await fetch_url({ url: characters + "/" + characters_ids });
};

export const get_character_by_id = async (character_id) => {
  return await fetch_url({ url: characters + "/" + character_id });
};

export const get_episodes = async () => {
  return await fetch_url({ url: episodes });
};

export const get_characters = async () => {
  return await fetch_url({ url: characters });
};

export const get_locations = async () => {
  return await fetch_url({ url: locations });
};
