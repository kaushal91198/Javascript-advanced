// Allow you to set the value of an object's property
// The setter here ensures that the radius of the circle is not set to a negative value.
// Settters can be very useful for validation and to make the constructor shorter

class Circle {
    constructor(radius){
        this._radius = radius
    }

    set radius (value){
        if(value<0){
            throw new Error('Radius cannot be negative')
        }
        else {
            this._radius = value

        }
    }
}

const circle = new Circle(5)
circle.radius =  -3 // it throws an error : Radius can't be negative.


class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);
  
    constructor(radius, color) {
      this._radius = radius;
      this.setColor(color);
    }
  
    setColor(newColor) {
      if (Circle.allowedColors.has(newColor)) {
        this._color = newColor;
      } else {
        throw new Error("That color is not allowed");
      }
    }
  
    get radius() {
      return this._radius;
    }
  
    // Setter for the radius
    set radius(value) {
      if (value < 0) {
        throw new Error("Radius cannot be negative!");
      } else {
        this._radius = value;
      }
    }
  
    get color() {
      return this._color;
    }
  
    set color(newColor) {
      this.setColor(newColor);
    }
  }
  