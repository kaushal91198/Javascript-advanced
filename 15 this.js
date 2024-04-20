 let obj = {
    name:"kaushal",
    city:'Los angeles',
    sing :function (){
        return this.name + this.city
    }
 }

 console.log(obj.sing())


 class Cat {
    constructor(firstName){
        this.firstName = firstName
    }

    dance(style = "tango"){
        return `Hello I am ${this} + ${style}`
    }
 }

 const newCat = new Cat("munno")
 console.log(newCat.dance())

 const newRat = new Cat('UTP').dance
 console.log(newRat()) //In this case, you will get the error. this is undefined (this.firstName)

 // In a sense, Javascript doesn't have functions,
 // Everything is called on something, like a method

//  newCat.dance() is method 


function greet ( ){
    return `${this} hi good morning`
}

//When you have function call on nothing you call it on the global object
//and what is global object if it is browser console it is window or if it is node then it is in the global object
//javascript basically calls every function on some object even if you don't explicitly do it, it calls your 
// function on the window object if you are in browser.
//value of this is determined when our code runs
// In general rule the value of this will be equal to whatever is left side on the dot
console.log(greet()) //[object global]


let objtr = {
    greet:greet
}

console.log(objtr.greet()) //[object Object]

//this is left dot rule
// here when we are calling method that's defined in a object 
// in above example the method we defined in a class I'm calling it in the global scope but here slightly
// different this keyword is undefined console.log(newRat()) here we don't this is window or global this 
// but undefined so here it is slightly different behaviour


// OOP and this
//when we call a function on nothing, but the function comes from inside a class, the value of this will be
//undefined, not window  