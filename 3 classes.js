 // classes allows us to extract a pattern
 // we can create the blueprint or a recipe that combines functinality, different methods with data
 // this keyword refers to the instance of the class
 class Triangle {
    getArea(){
        return this.a * this.b
    }
 }
const tri = new Triangle()
console.log(new Triangle().getArea())
tri.a =3
tri.b =3
console.log(tri.getArea())
console.log(typeof tri)

