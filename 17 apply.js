//So the main difference between call appy and bind is argument 
//here we can pass the multiple arguments


class Cat {
    constructor(firstName){
        this.firstName = firstName
    }

    dance(style, wearing){
        return `Hello I am ${this.firstName} + ${style} + ${wearing}`
    }
 }

 let blue = {
    firstName : "kaushal"
 }
 const newRat = new Cat('UTP').dance

// here we can't use the call method
 console.log(newRat.apply(blue,["one","two"]))

 Math.max(1,2,3,4,5)

 //Math.max{[1,2,3,4]} // throws an error

console.log( Math.max.apply(null,[1,2,3,4,5,6]))