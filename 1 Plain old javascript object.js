let obj1 = {}
let obj2 = new Object()
//same thing

obj1.name = "kaushal"
obj1['name'] = "kaushal"
//same thing


console.log(typeof obj1) // object

let key = 'name'
let obj3 = { name: 'kaushal',age:18}

console.log(obj3[key]) // kaushal
console.log(obj3.key) // undefined


//In js property don't exist evaluate to undefined 
// unlikne the other languages, say like python, which will throw an error in javascript if you try and 
//access a property that doesn't exist, we just always get undefined

// All keys get "stringified" (1)
// o[1] = "hello"
// o['1'] = "hello"
// o[true] = "hello"
// o['true'] = "hello"
///both are the same