//sometimes you need to say "call this function on this object" that's what call() is for
// we can use call to explicity tell js to call some function on particular object.

class Cat {
    constructor(firstName){
        this.firstName = firstName
    }

    dance(style = "tango"){
        return `Hello I am ${this.firstName} + ${style}`
    }
 }

 let blue = {
    firstName : "kaushal"
 }
 const newRat = new Cat('UTP').dance

//  newRat() // here this keyword is undefined, it will throw an error

 console.log(newRat.call(blue))
 // in this case I am calling the newRAt function on the blue object and passing argument as new style
 console.log(newRat.call(blue,'new style'))

