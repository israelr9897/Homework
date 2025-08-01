import { randomInt } from "crypto";
import { promises } from "dns";
import fs from "fs";


// //1
// function delayedGreet(name, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello " + name);
//     }, delay);
//   });
// }

// delayedGreet("Israel", 2000).then((data) => {
//   console.log(data);
// });

// //2
// function readFileContent(path) {
//   return new Promise((res, rej) => {
//     fs.readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         rej("readFileContent massege error: " + err.message);
//         return;
//       }
//       res(data);
//     });
//   });
// }

// readFileContent("text.txt")
//   .then((data) => {
//     console.log("Content of text.txt:\nThis is my file content - \n" + data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //3
// function randomOperation() {
//   return new Promise((res, rej) => {
//     const num = randomInt(2);
//     if (num) {
//       rej("Failure!");
//       return;
//     }
//     res("Success!");
//   });
// }
// randomOperation()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //4
// function raceTimers(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("timer A finished!")
//         }, 1000);
//         setTimeout(() => {
//             res("timer B finished!")
//         }, 2000);
//     })
// }
// raceTimers().then(data=>{
//     console.log(data);
// })

//5
// function fetchData(url) {
//   return new Promise((res, rej) => {
//     fetch(url)
//     .then((x) => res(x.json()));
//   });
// }
// fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
//   console.log(data);
// });

// //6
// function waitAll() {
//   return [
//     new Promise((res, rej) => {
//       setTimeout(() => {
//         res("first");
//       }, 1000);
//     }),
//     new Promise((res, rej) => {
//       setTimeout(() => {
//         res("second");
//       }, 2000);
//     }),
//     new Promise((res, rej) => {
//       setTimeout(() => {
//         res("third");
//       }, 3000);
//     }),
//   ];
// }
// Promise.all(waitAll()).then((data) => {
//   console.log(data);
// });

// //7
// function checkFileExists(path){
//     return new Promise((res, rej) => {
//         if(!fs.existsSync(path)){
//             rej("false");
//         }
//         res("true");
//     })
// }
// checkFileExists("text.txt").then(data => {
//     console.log("File exists: " + data);
// }).catch(data => {
//     console.log("File exists: " + data);
// })

// //8.1
// function chainedGreetings() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, 1000);
//   });
// }
// chainedGreetings()
//   .then(() => {
//     console.log("Hii");
//     return new Promise((res) => {
//       setTimeout(() => {
//         res();
//       }, 2000);
//     });
//   })
//   .then(() => {
//     console.log("Hou are you?");
//     return new Promise((res) => {
//       setTimeout(() => {
//         res();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     console.log("good by");
//   });

// //8.2
// function chainedGreetings(massege, daily) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//       console.log(massege);
//     }, daily);
//   });
// }
// chainedGreetings("Hii", 1000)
// .then(() => chainedGreetings("Hou are you?", 2000)
// .then(() => chainedGreetings("good by", 1000).then(() => {})));

//9
function processFile(inputPath, outputPath){
    return new Promise((res, rej) => {
        fs.readFile(inputPath,"utf-8", (err, data) => {
            if(err){
                rej(err);
                return;
            }
            res(data, outputPath);
        })
    })
}
processFile("text.txt", "out.txt")
.then(data => {
    return new Promise((res, rej) => {
        fs.writeFile("out.txt", "Word count: " + data.length ,(err) => {
            if(err){
                rej(err)
                return;
            }
            res()
        })
    })
}).then(()=>{})