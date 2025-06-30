import { time } from "console";
import { randomInt } from "crypto";
import fs from "fs";
import os from "os";
import path from "path";

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
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file: ", err);
//     return;
//   }
//   const lines = data.split("\n").filter((line) => line);
//   console.log(lines[randomInt(lines.length)]);
// });

//5
// let counter = 0;
// function printMemory() {
//   counter++;
//   const totalMemory = os.totalmem();
//   const freeMemory = os.freemem();
//   const memory = 100 - ((freeMemory / totalMemory) * 100).toFixed(2);
//   console.log(`Free Memory: ${memory}%`);
//   if (counter >= 5) {
//     clearInterval(playInterval);
//   }
// }

// const playInterval = setInterval(printMemory, 1000);

//6
// const date = new Date().toString();
// fs.appendFile("text.txt", `\n${date} - Log entry`, "utf-8", (err) => {
//   if (err) {
//     console.error("Error reading file: ", err);
//     return;
//   }
// });

//7
// fs.mkdir("newFile",(err)=>{
//     if(err){
//         console.log("Folder already exists.");
//         return;
//     }
//     console.log("Folder created successfully.");
// })

//8
// fs.unlink("tempText.txt", (err) => {
//     if (err) {
//         console.log("File not found.");
//         return;
//     }
//     console.log("File deleted.");
// });

//9
// let i = 1;
// for (const element of os.cpus()) {
//     console.log(`cpu ${i}: ` + element.model);
//     i++;
// }

//10
// const listMassege = ["bla","bla bla","bla bla bla"];
// listMassege.forEach((massege, i) =>{
//     setTimeout(()=>{
//         console.log(massege);
//     }, 1000 * i+1)
// })

//11
// let sum = 0;
// fs.readdir("../", (err, files) => {
//     if (err) {
//         console.error("Error reading dir: ", err);
//         return;
//     }
//     const filess = files.filter((file) => file.includes("."));
//     const len = filess.length;
//     let counter = 0;
//     filess.forEach((file) => {
//         fs.stat("../" + file, (err, data) => {
//             counter++;
//             if (err) {
//                 console.error("Error reading: ", err);
//                 return;
//             }
//             sum += data.size;
//             if (counter === len) {
//                 console.log(sum);
//             }
//         });
//     });
// });
