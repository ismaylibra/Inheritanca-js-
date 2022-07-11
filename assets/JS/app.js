class Vehicle{
    constructor(mark){
        this.mark = mark
    }
}

class Car extends Vehicle{
    constructor(mark,model,engine){
        super(mark);
        this.model=model;
        this.engine = engine;
    }
     GetInfo(){
        console.log(`Car Mark: ${this.mark}  Car Model: ${this.model}  Car Engine: ${this.engine}
        `);
    }
}


let auto = new Car('BMW','m6',4.4)
auto.GetInfo()
