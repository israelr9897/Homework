import fs from "fs";
import rl from "readline-sync";

function createUser(path, nameUser) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log("error massege: " + err);
      return;
    }
    let newdata = JSON.parse(data);
    let IsExists = false;
    newdata.forEach((obj) => {
      if (obj.userName === nameUser) {
        IsExists = true;
        console.log("Such a user exists.");
        return;
      }
    });
    if (!IsExists) {
      newdata.push({ userName: nameUser });
      fs.writeFile(path, JSON.stringify(newdata), (err) => {
        if (err) {
          console.log("error " + err);
        }
        console.log("The user was successfully added!");
      });
    }
  });
}

function readerUsers(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log("error massege: " + err);
      return;
    }
    let newdata = JSON.parse(data);
    console.log(newdata);
  });
}

function userUpdate(path, nameUser, newNameUser) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log("error massege: " + err);
      return;
    }
    let newdata = JSON.parse(data);
    let isFind = false;
    newdata.forEach((obj) => {
      if (obj.userName === nameUser) {
        isFind = true;
        obj.userName = newNameUser;
        return;
      }
    });
    if (!isFind) {
      fs.writeFile(path, JSON.stringify(newdata), (err) => {
        if (err) {
          console.log("error " + err);
        }
        console.log("The user has been successfully updated!");
      });
    } else {
      console.log("User not find!");
    }
  });
}

function deletedUser(path, nameUser) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log("error massege: " + err);
      return;
    }
    let newdata = JSON.parse(data);
    let isFind = false;
    newdata.forEach((obj, idx) => {
      if (obj.userName === nameUser) {
        isFind = true;
        newdata.splice(idx, 1);
        return;
      }
    });
    if (!isFind) {
      fs.writeFile(path, JSON.stringify(newdata), (err) => {
        if (err) {
          console.log("error " + err);
        }
        console.log("The user has been successfully deleted!");
      });
    } else {
      console.log("User not find!");
    }
  });
}

function inputUserName() {
  return rl.question("Enter your name: ");
}

function inputNewUserName() {
  return rl.question("Enter new your name: ");
}

function menu() {
  const path = "./db/db.txt";

  console.log("Welcome, Please select -");
  console.log("1. Add user");
  console.log("2. Print users");
  console.log("3. Change username");
  console.log("4. Delete user");
  console.log("0. Exit");
  const input = rl.question();

  switch (input) {
    case "1":
      createUser(path, inputUserName());
      break;
    case "2":
      readerUsers(path);
      break;
    case "3":
      userUpdate(path, inputUserName(), inputNewUserName());
      break;
    case "4":
      deletedUser(path, inputUserName());
      break;
    case "0":
      console.log("Good by");
      break;
  }
}


menu();
