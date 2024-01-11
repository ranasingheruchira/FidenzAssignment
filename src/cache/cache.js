export function setCacheData(data, timestamp) {
  localStorage.setItem("weatherData", JSON.stringify(data));
  localStorage.setItem("timestamp", JSON.stringify(timestamp));
}

export function getCachedData() {
  const dataString = localStorage.getItem("weatherData");
  // console.log("data", Array.from(JSON.parse(dataString)));
  return Array.from(JSON.parse(dataString));
}

export function removeCachedData() {
  localStorage.removeItem("weatherData");
  localStorage.removeItem("timestamp");
}

export function isCacheExpired() {
  const fetchedTime = localStorage.getItem("timestamp");
  const currentTime = new Date().getTime();

  // console.log("current time", currentTime);
  // console.log("fetched time", fetchedTime);

  if (!fetchedTime && currentTime) {
    return true;
  } else {
    let timeDifference = (currentTime - Number(fetchedTime)) / (1000 * 60);
    console.log("time difference", timeDifference);
    if (timeDifference > 5) {
      return true;
    } else return false;
  }
}
