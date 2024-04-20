//Private instance class field provide a way to maintain encapsulation and not allow external access
//public property can be accessed within  the class but aslo outside the class
//private property can be accessed within class not outside the class
class Cat {
    name; // public
    static numOfCats = 0 
    constructor(name){
        this.name = name
        Cat.numOfCats+=1
    }
}
console.log(Cat.numOfCats)

console.log(new Cat("catty"))
console.log(new Cat("catty").numOfCats)  // undefined

console.log(Cat.numOfCats)

// in public fields, we can change it directly
const newclass = new Cat("catty")
newclass.name = "nginx"
console.log(newclass)
     
class CatPrivate {
    #name; // private
    static numOfCats = 0 
    constructor(name){
        this.#name = name
        Cat.numOfCats+=1
    }
    getName(){
        return this.#name
    }
}

// in private fields, we can't change it outside the class
const newclass2 = new CatPrivate("catty")
// newclass2.#name = "nginx" // Property '#name' is not accessible outside class 'CatPrivate' because 
// it has a private identifier.ts(18013)

console.log(newclass2)

//but we can get the property by getters method
console.log(newclass2.getName())

