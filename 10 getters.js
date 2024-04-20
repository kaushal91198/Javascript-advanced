// javascript provides special methods, termed "getters and "setters", which allow you to define the 
// ways to retrieve or change the values of object properties respectively


//here diameter is based always on the radius
// so instead of this syntax I could define a method called get diameter
class CircleSecond {
    constructor(radius){
        this._radius = radius
        this.diameter = radius * 2
    }
}

class Circle {
    constructor(radius){
        this._radius = radius
    }
    get diameter (){
        return this._radius * 2 
    }
}


console.log(new Circle(4).diameter)
console.log(new Circle().diameter()) // it throws an error - .diameter is not function , so behind the scenes 
// this function is actaully running but the point of a getter is to act like a property, but have function 
// logic behind it, and this can be super useful