import { getRandomValues } from "crypto";
import fs from "fs";
import os from "os";

//1
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file: ", err);
//     return;
//   }
//   console.log("File Content:\n" + data);
//   fs.stat("./text.txt", (err, data) => {
//     if (err) {
//       console.error("Error reading stat file: ", err);
//       return;
//     }
//     console.log(`Size: ${data.size} bytes`);
//     console.log("Created At: " + data.birthtime);
//   });
// });

//2
// fs.readdir("../", (err, files) => {
//   if (err) {
//     console.error("Error reading: ", err);
//     return;
//   }
//   const filess = files.filter((file) => file.includes("."));
//   filess.forEach((file) => console.log("File: " + file));
// });

//3
// function printTime(num) {
//   if (num < 0) {
//     console.log("Time's up!");
//     return;
//   }
//   return setTimeout(() => {
//     console.log(num);
//     printTime(num - 1);
//   }, 1000);
// }
// printTime(5);

//4
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file: ", err);
//     return;
//   }
//   const lines = data.split("\n").filter(line => line);
//   console.log(lines[Math.floor(Math.random() * lines.length)]);
// });

//5
let counter = 0;
function printMemory() {
  counter++;
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const memory = 100 - ((freeMemory / totalMemory) * 100).toFixed(2);
  console.log(`Free Memory: ${memory}%`);
  if (counter >= 5) {
    clearInterval(playInterval);
  }
}

const playInterval = setInterval(printMemory, 1000);
