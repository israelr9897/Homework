const arr = ["1",2,3,"4","5"];
//1
function doubleValues(arr,fn){
    return fn(arr);
}

double = (arr) => {
    return arr.map(num => num * 2)
};

let double2 = doubleValues(arr, double);
console.log(double2);

//2
function onlyEvenValues(arr){
    return arr.filter(num => !(num % 2) ); 
} 
console.log(onlyEvenValues(arr));

//3
function showFirstAndLast(arr){
    let newArr = arr.map((item,i) => {
        if((i == 0 || i == arr.length-1) && typeof(item) == "string"){
            return item;
        }
        }).filter(num => num);
    return newArr;
}
console.log(showFirstAndLast(arr));

//4
function vowelCount(str){
    const strVuwe = "aeiou";
    let contOfVuwe = {};
    for (const char of str) {
        newchar = char.toLowerCase();
        if(strVuwe.includes(newchar)){
            contOfVuwe[newchar]? contOfVuwe[newchar] += 1 : contOfVuwe[newchar] = 1
        }
    }
    return contOfVuwe;    
}
console.log(vowelCount("giuIusUtaefiur"));

//5(simpel)
// capitalize = (str) => {
//     return str.toUpperCase();
// }

//5
function capitalize(str){
    newStr = "";
    str
    .split("")
    .forEach(char => newStr += char.toUpperCase());
    return newStr;
}
console.log(capitalize("gbghHbgefGT"));

// 6
function shiftLetters(str){
    let newStr = "";
    for (const char of str) {
        if(char === "a"){
            newStr += "z";
        }
        else if(char === "A"){
            newStr += "Z";
        }
        else{
            let numOfAscii = char.charCodeAt(0)-1;
            newStr += String.fromCharCode(numOfAscii);
        }
    }
    return newStr;
}
console.log(shiftLetters("abcA"));

// 7
function swapCase(str){
    let newStr = str
    .split("")
    .map((char, i) => i % 2? capitalize(char) : char)
    .join("")
    return newStr;
}
console.log(swapCase("sfdnclkaf"));
