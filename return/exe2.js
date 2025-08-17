//The function did not sum the actual number received.
export function sumTo(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

//A minimum number will always be less than 0.
export function maxOrNull(arr) {
  let max = arr[0];
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}

export function findObjectByValue(objArr, value) {
  objArr.forEach((obj) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element === value) {
          return obj;
        }
      }
    }
  });
  return "not found";
}
