import { EARTH_C_137_ID, MORTY_ID, RICK_ID } from "./constants";
import {
  get_character_id_from_url,
  get_location_by_id,
  get_multiple_characters,
} from "./utils";

export const get_characters_from_origin = async () => {
  const characters = await get_origin_characters_data();
  return characters;
};

export const get_origin_characters_ids = async () => {
  const earth_c_137_location = await get_location_by_id(EARTH_C_137_ID);
  const ids = earth_c_137_location.residents.map(get_character_id_from_url);
  return [MORTY_ID, RICK_ID, ...ids];
};

export const get_origin_characters_data = async () => {
  const ids = await get_origin_characters_ids();
  return await get_multiple_characters(ids);
};
