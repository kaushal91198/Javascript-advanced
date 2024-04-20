class Myclass {
    #privateMethod(){
        console.log("private method called")
    }
    publicMethod(){
        this.#privateMethod()
    }
}
const insta = new Myclass()
// insta.#privateMethod() // here can't call the method outside the class

// we can inside the class

insta.publicMethod()