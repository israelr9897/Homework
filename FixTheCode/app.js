import { calculateDiscount } from "./discount.js";
import { getTotal } from "./cart.js";

console.log(calculateDiscount(150)); // Expect: 135
console.log(calculateDiscount(15));  // Expect: 15
console.log(calculateDiscount(50));  // Expect: 47.5

console.log(getTotal()); // Should sum (price * quantity) for each item

