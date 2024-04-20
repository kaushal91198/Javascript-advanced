//Js gives us "static methods" where the method is called on a Class, not an object - therefore it can't 
//have access to invidiual object attributes

class Triangle {

    constructor(a,b){
        this.a = a
        this.b = b

    }

    static length = 0

    //this is class methods
    static getArealogs(){
        return `this is the area logss ${this.a}`
    }

    // this is instance methos 
    describe(){
        return `Area is ${this.a*this.b}`
    } 
 }

 console.log(Triangle.getArealogs())

 let newTriangle = new Triangle(5,6)

 console.log(newTriangle.getArealogs()) // it throws an error coz it is class methods

// Almost every other OO language more property calls this a "class method" not a static method - 
// since it does have access to this class itself("that's what the "this" is in a js "static method")
// More consistent OO languages like C++/Java?pyhton , also have true static methods,where thay don't have access
//to class itself
