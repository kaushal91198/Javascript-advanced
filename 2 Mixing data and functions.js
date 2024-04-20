//suppose we have 50 functions for some operations 
// eg function ui(a,b){ return a*b}
//  function ui2(){return a+b}
//.....
//etc

// Instead of doing that, we can do POJO
//reusable code 

let obj = {
    a:2,
    b:3,
    getArea:function(){
        return this.a*this.b
    },
    getAddition:function(a,b){
        return this.a+this.b
    }
}

console.log(obj.getArea())
console.log(obj.getAddition())

obj.a = 3
obj.b = 5

console.log(obj.getArea())
console.log(obj.getAddition())


// pros
// so we can helpfully mix data and functinality
// this is tidy:related functionality together

//cons
// Annoying when we have more than one triangle
// - difficult to maintain
// - if we have 100 triangles, we'd have 1000 copies of these functions - that's going to waste memory


