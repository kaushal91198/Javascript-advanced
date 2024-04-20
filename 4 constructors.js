// A method named constructor will be called on making a new instance
// we can initialize properties on the object inside the constructor
class Triangle {
    constructor(a,b){
this.a = a
this.b = b

    }
    getArea(){
        return this.a * this.b
    }
 }

const tri = new Triangle(1,2)
const triTwo = new Triangle(3,4)

console.log(tri.getArea())
console.log(triTwo.getArea())

//Note that constructor functions always just return undefined.

