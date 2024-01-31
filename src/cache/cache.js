import { cacheKeys, cacheExpireTime } from "../constants/Constants";

export function setCacheData(data, timestamp) {
  localStorage.setItem(cacheKeys.weatherData, JSON.stringify(data));
  localStorage.setItem(cacheKeys.timeStamp, JSON.stringify(timestamp));
}

export function getCachedData() {
  const dataString = localStorage.getItem(cacheKeys.weatherData);
  if (!dataString) {
    return null;
  } else {
    return Array.from(JSON.parse(dataString));
  }
}

export function isCacheExpired() {
  const fetchedTime = localStorage.getItem(cacheKeys.timeStamp);
  const currentTime = new Date().getTime();

  if (!fetchedTime && currentTime) {
    return true;
  } else {
    let timeDifference = (currentTime - Number(fetchedTime)) / (1000 * 60);
    if (timeDifference > cacheExpireTime) {
      return true;
    } else return false;
  }
}
