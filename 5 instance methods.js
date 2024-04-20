// functions placed in a class are methods (formally instance methods).
// they have access to properties of object with this
// they take arguments/return data like nay other functions
//A method can call another method
// note: to call a method, you need to call on this


class Triangle {
    a= 5
    b=6
    getArea(){
        return this.a * this.b
    }

    describe(){
        return `Area is ${this.getArea()}`
    } 
 }

 console.log(new Triangle().describe())