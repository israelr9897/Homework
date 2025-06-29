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
    sayNewName : () => {
        console.log(this.name);
    },
    sayNewName2 : function(){
        console.log(this.name);
    }
}
obj.sayNewName();
obj.sayNewName2();

