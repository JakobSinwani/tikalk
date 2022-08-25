export function convert_arr_values_ot_object_keys(array, signed_value = true) {
  return array.reduce(
    (accumulator, current_value) => ({
      ...accumulator,
      [current_value]: signed_value,
    }),
    {}
  );
}
