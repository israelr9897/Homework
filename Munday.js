//1
// let a = "good morning";
// let b = "good evening";
// let lenA = a.length;
// let lenB = b.length;
// a += b;
// b = a.slice(0,lenA,b)
// a = a.slice(-lenA)
// console.log(a);
// console.log(b);
//2
// const strList = [["x","f","u"],["x","a","X"],["X","X","N"],["o","q","X"],["x","a","s"]];
// let counter = 0;
// let listIdx =[];
// for (let i = 0; i < strList.length; i++) {
//     let idx = [];
//     for (let j = 0; j < strList[i].length; j++) {
//         if(strList[i][j] !== "x" && strList[i][j] === "X"){
//             counter++;
//             idx.push(j);
//         }

//     }
//     listIdx.push(idx);
// }
// console.log(counter);
// console.log(listIdx);

//3
// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
// console.log(family.children[2].name);
// let listChildren = [];
// for (const chil of family.children) {
//     listChildren.push(chil.name);
// }
// console.log(listChildren.join());


//4
// const array = [1,2,3,4,5];
// const array2 = [];
// for (let i = array.length -1;i >= 0; i--) {
//     array2.push(array[i])
// }
// console.log(array2);


//5
// let array = [1,"a",,false,5,[3,4,5],{"name":"israel"},true]
// let typeList = {};
// for (const type of array) {
//     typeof(type) in typeList? typeList[typeof(type)] += 1 : typeList[typeof(type)] = 1;
// }
// console.log(typeList);

//6
// const listOfNumbers = [1,23,456,7,43,5789];
// let listOfNumUnder100 = [];
// let counter = 0;
// for (const num of listOfNumbers) {
//     if (num < 100) {
//         counter++;
//         listOfNumUnder100.push(num)
//     }
// }
// console.log(counter, listOfNumUnder100);

//7
// let obj = {
//     "odd":[],
//     "even":{
//         "e2":[],
//         "e3":[]
//     }
// };

// for (let i = 0; i < 50; i++) {
//     if(!(i%2)){
        
//         if(!(i%3)){
//             obj.even.e3.push(i);
//             continue;
//         }
//         obj.even.e2.push(i);
//         continue;
//     }
//     obj.odd.push(i);
// }
// console.log(JSON.stringify(obj));


//8
// let array = [[1,2,3],[4,5,6],[7,8,9]]

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         if(j == i){
//             array[i][j]= "#";
//         }
//         if(j + i == array[i].length-1){
//             array[i][j]= "#";
//         }
//     }    
// }
// for (const arr of array) {
//     let str = "";
//     for (const num of arr) {
//         str += num +" "        
//     }
//     console.log(str);    
// }

//9
// let str = "e  fdDkdsjfoger. ijga a  Ang,vfadi. osrth"
// let frequencyCounter = {};
// for (const char of str.replace(/[., ]/g, "")) {
//     newChar = char.toLocaleLowerCase();
//     frequencyCounter[newChar]? frequencyCounter[newChar] += 1 : frequencyCounter[newChar] = 1;
// }
// console.log(frequencyCounter);

//10
// const arr = [[1,3,4,-5,6],[88,7,5,-3,-2]];
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] >= 0? newArray.push(arr[i][j]) : null 
//     }    
// }
// console.log(newArray);

//11
// const obj = {"fd": 56, "a":1, "d":90, "b":3};
// let newObj = {};
// let sortList = [];
// for (const key in obj) {
//     sortList.push(key);
// }
// for (const item of sortList.sort()) {

//     newObj[item.toUpperCase()] = obj[item];    
// }
// console.log(newObj);

//12
// let num = 5;
// let symbol = "*";
// let temp = symbol;
// for (let i = 0; i < num; i++) {
//     console.log(temp);
//     temp += symbol
// }

//13
// const arr1 = [1,3,7,4,-5,6];
// const arr2 = [88,7,5,3,-2];
// let counterDict = {};
// for (const num of arr1) {
//     counterDict[num] = 1
// }
// for (const num of arr2) {
//     counterDict[num] = 1
// }
// console.log(Object.keys(counterDict).length);

//14
const obj = {"a": 2, "fg":34, "bool": true, "n":"dgh"}
let newObj = {};
for (const key in obj) {
    if(typeof(obj[key]) === "number" || typeof(obj[key]) === "string"){
        newObj[obj[key]] = key;
    }   
}
// console.log(newObj);

//15
