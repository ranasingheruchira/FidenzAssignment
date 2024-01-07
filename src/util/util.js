import { BACKGROUND_ARRAY, ICONS } from "../constants/Constants";

export function background(index) {
  return BACKGROUND_ARRAY[index % BACKGROUND_ARRAY.length];
}

export function icon(weatherID) {
  const id = String(weatherID);
  if (id[0] === "2" || id[0] === "3" || id[0] === "5") {
    return ICONS["rainy"];
  } else if (id[0] === "6") {
    return ICONS["broken"];
  } else if (id[0] === "7") {
    return ICONS["misty"];
  } else if (id === "800") {
    return ICONS["sunny"];
  } else if (id[0] === "8") {
    return ICONS["cloudy"];
  } else {
    return ICONS["misty"];
  }
}
