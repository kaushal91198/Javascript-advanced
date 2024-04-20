//These are introduced as part of ES2022 
//they are new and I don't see enough other people using them
//so block of code prfixed by word static
// just like we are defining a static property or a class field, it doesn't go in a constructor
//this block will run when the class is loaded
// class is loaded basically one time when js first loads this class
// usually you will use this to perform some initialization or operation that are relevant to the class
class Myclass{
    static {
        console.log("class is loaded")
    }
}

//we can do this for connection

class database  {
    static connection = process.env.NODE_ENV ==='production'? this.loadProductionConnection() 
    : this.loadDevConnection()
    static {
        console.log('Class is loaded')
    }
    static loadProductionConnection() {
        console.log("production connection called")
    }
    static loadDevConnection(){
        console.log("development connection called")
    }
}