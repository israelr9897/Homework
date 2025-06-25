// const users = [
//     { name: "Alice", stats: { score: 88 } },
//     { name: "Bob", stats: { score: 95 } },
//     { name: "Charlie", stats: { score: 72 } },
//   ];
// let sortUsers = [];
// let sortTemp = users.map(item => item.stats.score);
// sortTemp = sortTemp.sort((a, b) => b - a);
// for (const scor of sortTemp) {
//     for (const user of users) {
//         if(user.stats.score === scor){
//             sortUsers.push(user)
//         }
//     }
// } 
// console.log(JSON.stringify(sortUsers));

//2
function duplicateNumbers(arr){
    let obj = {};
    for (const num of arr.join("")) {
        newn = num.toString();
        
        obj[newn]? obj[newn] += 1 : obj[newn] = 0;
    }
    console.log(obj);
    

}
duplicateNumbers( [1, 2, 3, 4, 3, 2, 5, 6, 1]);