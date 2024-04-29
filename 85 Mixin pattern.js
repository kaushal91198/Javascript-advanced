//and the mix in pattern, as its name implies, is a pattern involving together objects functionality from one object to another object
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  greet() {
    return `${this.name} says hi`;
  }
}

//mixin object
const fly = {
  fly() {
    return `${this.name} flies`;
  },
  land() {
    return `${this.name}, the ${this.species}, returns to the earth`;
  },
};
const swim = {
  swim() {
    return `${this.name} swims underwater! wow!`;
  },
};

const bernie = new Animal("Bernie", "Pelican");

console.log(bernie, "bernie before");
Object.assign(bernie, fly);
Object.assign(bernie, swim);
console.log(bernie, "bernie after");
