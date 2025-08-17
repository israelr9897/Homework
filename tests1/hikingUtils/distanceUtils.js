export function kmToMeters(km) {
  if (km !== 0 && !km) {
    return "no number was entered";
  }
  if (!Number.isInteger(km)) {
    return "No value of type entered";
  }
  return km * 1000;
}
