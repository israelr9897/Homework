export function caloriesBurned(weightInKg, distanceInKm) {
    if (weightInKg <= 0 || distanceInKm <= 0){
        return "Please enter a number greater than 0"
    }
  const calories = weightInKg * distanceInKm * 1.036;
  return calories;
}

console.log(caloriesBurned(1.1,2.2));