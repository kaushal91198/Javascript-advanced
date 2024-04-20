//Optional chaining
//Optional chaining allows reading the value of a property located deep within a chain of connected objects
//without having to check each reference in the chain

let user = {
    name:{
        first:"Kaushal",
    }
}

if (user && user.name && user.name.last){
    // instead of doing that 
    //(user?.name?.last)
    console.log("condition executed")
}
else {
    console.log("condition not executed")

}