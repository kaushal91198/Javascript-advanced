//Modern js offers "static properties",where individual pieces of data are on the class not , on instances
//other OO languages often call this idea a "class attribute"

class Triangle {
    constructor(a,b){
        this.a = a
        this.b = b

    }

    static length = 0
    getArea(){
        return this.a * this.b
    }

    describe(){
        return `Area is ${this.getArea()}`
    } 
 }

 //here every instance of this class will have it own properties but static length won't change.
 console.log(Triangle.length)
 Triangle.length = 89
 console.log(Triangle.length)
