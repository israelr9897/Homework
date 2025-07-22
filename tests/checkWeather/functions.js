export function isSafeToHike(temp, speed) {
  if (temp === null || speed === null) {
    return { msg: "no number was entered" };
  }
  if (typeof temp !== "number" || typeof speed !== "number") {
    return { msg: "No value of type entered" };
  }
  let safe = true;
  if (temp < 0 || temp > 35) {
    safe = false;
  }
  if (speed > 50) {
    safe = false;
  }
  if (safe) {
    const json = {
      safe: true,
      message: "All conditions are good for hiking!",
    };
    return json;
  }
  const json = {
    safe: safe,
    message: "Too windy to hike!",
  };
  return json;
}
