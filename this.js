//1
function User(name){
    this.name = name;
}

User.prototype.sayName = function(){
    console.log("User: " + this.name);
}

const user1 = new User("avi");
const user2 = new User("ari");
user1.sayName();
user2.sayName();

//2
const obj = {
    name : "israel",
    sayNewName : () => {
        console.log(this);
    },
    sayNewName2 : function(){
        console.log(this.name);
    }
}
obj.sayNewName();
obj.sayNewName2();

//3
const obj2 = {
    log : function(){
        console.log("Welcome," + this); 
    }
}
function logger(fn){
    fn();
}

logger(() => obj2.log());

