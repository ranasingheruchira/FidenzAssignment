import cityList from "./cities.json";

function getCities() {
  let tempArray = [];
  for (let city of cityList.List) {
    tempArray.push(city.CityName);
  }
  return tempArray;
}

export const cities = getCities();
