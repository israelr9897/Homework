class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    getDetails = function(){
        return `${this.make} - ${this.model}`
    } 
}

export{
    Car
};