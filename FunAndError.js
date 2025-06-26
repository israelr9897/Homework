//1
function extractNumbers(arr){
    try{
        if(!Array.isArray(arr)){
            throw new Error("Isn't array");
        }
        return arr.filter(num => typeof(num) === "number");
    }
    catch(err){
        console.log(err.message);
    }
}
// console.log(extractNumbers([1,2,3,4,null]));

//2
function sumNumbersSafe(arr){
    try{
        const newArr = extractNumbers(arr);
        let result = 0;
        for (const num of newArr) {
            result += num;
        }        
        return result;
    }catch(err){
        console.log("sumNumbersSafe ERR Message : " + err.message);
        return 0;
    }
}
const result = sumNumbersSafe([1,3,45,null])
// console.log(result);

//3
function filterLargeSums(arrList, minTotal){
    try{
        let newArrList = arrList.filter(arr => sumNumbersSafe(arr) >= minTotal);
        return newArrList;
    }  catch(err){
        console.log("filterLargeSums ERR Message : " + err.message);
    }
}
console.log(filterLargeSums([[1,2,3], [10,"bad",5],"bad"],"fg", 10));  

//4
function summaryStats(arrList){
    try{
        let newArrObj = [];
        filterLargeSums(arrList,10).forEach(arr => {
            let sumTemp = sumNumbersSafe(arr);
            newArrObj.push({sum: sumTemp, average: sumTemp / arr.length})
        });;
        return newArrObj;

    }
    catch(err){
        console.log("summaryStats ERR Message : " + err.message);
    }
}
const arrlist = summaryStats([[1,2,3], [5,5,5], [100], "bad"]);
console.log(JSON.stringify(arrlist));

//5
const calculator = {
    add : (a,b) => {
        return a+b;
    },
    subtract : (a,b) => {
        return a-b ;
    },
    multiply : (a,b) => {
        return a*b ;
    },
    divide : (a,b) => {
        return a/b ;
    }
}
function safeCalculator(a, b, operation){
    try{
        if(typeof(a) === "number" && typeof(b) === "number"){
            switch(operation){
                case "add":
                    return calculator.add(a,b);
                case "subtract":
                    return calculator.subtract(a,b);
                case "multiply":
                    return calculator.multiply(a,b);
                case "divide":
                    return calculator.divide(a,b);
            }
        }
        else{
            throw new Error("One of the values ​​is not a number");
        }
    }
    catch(err){
        console.log("safeCalculator ERR Message : " + err.message);
    }
};

console.log(safeCalculator(2,"5","divide"));




