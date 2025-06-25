//1
function createCounter(){
    let counter = 0;
    return () => {
        return counter += 1;
    }
}
const c1 = createCounter();
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());

//2
function secretHolder(str){
    return {
        getSecret : () => {
            return str;
        },
        setSecret : (newStr)=>{
            str = newStr
        }
    }
}
const mySecret = secretHolder("abc");
console.log(mySecret.getSecret()); 
mySecret.setSecret("123");
console.log(mySecret.getSecret()); 

//3
function buildFunctions() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }
    return arr;
  }
  
  const funcs = buildFunctions();
  funcs[0](); // should print 0
  funcs[1](); // should print 1
  funcs[2](); // should print 2