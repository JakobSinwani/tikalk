import { fetch_url } from "../../../utils/fetch_functions";
import { RICK_AND_MORTY_END_POINTS } from "./constants";
const { characters, episodes, locations } = RICK_AND_MORTY_END_POINTS;

export const get_multiple_characters = async (characters_ids) => {
  characters_ids = characters_ids.join(",");
  return await fetch_url({ url: characters + "/" + characters_ids });
};
export const get_location_by_id = async (location_id) => {
  return await fetch_url({
    url: locations + "/" + location_id,
  });
};
export const get_character_id_from_url = (url) => {
  const last_value_of_url = /\/([^\/]+)\/?$/;
  return url.match(last_value_of_url)[1];
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

export const sort_by_unpopular = (characters) => {
  return characters.sort((a, b) => a.episode.length - b.episode.length);
};
