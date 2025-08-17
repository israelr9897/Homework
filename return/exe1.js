//1
// let a = "some string";
// let b = "other string";

// console.log("a: ", a);
// console.log("b: ", b);

// b += a;

// a = b.slice(0, a.length, -1);
// b = b.slice(a.length + 1);

// console.log("a: ", a);
// console.log("b: ", b);

//2
// const matrix = [
//   ["a", "X", "3", "b", "x"],
//   ["c", "d", "X", "y", "z"],
//   ["x", "1", "2", "X", "e"],
//   ["f", "g", "h", "X", "x"],
//   ["i", "j", "X", "k", "l"],
// ];

// let count = 0;

// matrix.forEach((list) => {
//   for (const ch of list) {
//     if(ch === "X") count++
//   }
// });
// console.log(count);

//3
// let family = {
//   parents: {},
//   children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }],
// };

// console.log(family.children[2].name);
// let bruders = family.children.map((ch,i) => { if(i !== 2) return ch.name}).join(",")
// console.log(bruders);

//4
// let str = "";
// const arr = ["a", "X", "3", "b", "x"];
// for (let i = arr.length - 1; i >= 0; i--) {
//   str += arr[i];
// }

// console.log(str);

//5
// const arr = [
//   "a",
//   "X",
//   { name: "israel" },
//   90,
//   "x",
//   null,
//   false,
//   "h",
//   5,
//   "x",
//   null,
//   "j",
//   true,
//   "k",
//   "l",
// ];

// let dict = {};

// arr.forEach((char) => {
//   if (char !== null) {
//     if (typeof char in dict) dict[typeof char] += 1;
//     else dict[typeof char] = 1;
//   } else {
//     if ("null" in dict) dict["null"] += 1;
//     else dict["null"] = 1;
//   }
// });

// console.log(dict);

//6
// let myArray = [
//   23, 487, 105, 399, 12, 256, 78, 314, 450, 7, 198, 321, 432, 64, 275,
// ];
// let newArry = [];
// myArray.forEach((num) => {
//   if (num < 100) newArry.push(num);
// });

// console.log(newArry);

//7
// let arr = [];

// for (let i = 0; i < 51; i++) {
//   arr.push(i);
// }

// const dict = {
//   even: [],
//   odd: [],
//   tree: [],
// };
// arr.forEach((num) => {
//   if (num % 2) dict.odd.push(num);
//   else {
//     if (num % 3 === 0) dict.tree.push(num);
//     dict.even.push(num);
//   }
// });

// console.log(JSON.stringify(dict));

//8
