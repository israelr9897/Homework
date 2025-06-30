import fs from "fs";

//1
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  }
  console.log("File Content:\n" + data);
  fs.stat("./text.txt", (err, data) => {
    if (err) {
        console.error("Error reading stat file: ", err);
        return;
    }
    console.log(`Size: ${data.size} bytes`);
    console.log("Created At: " + data.birthtime);
  });
});


