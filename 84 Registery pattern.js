//The registry pattern is a design pattern used to store and retrieve instance of objects.
//we can centralize and organize the management of those objects or functions in one place , the registry
//it acts like a central place to manage the objects, and it is particularly useful when you want to access the instances from the different parts of your application without needing the pass them around as parameters

//almost like the databases, create store and retrieve
//Imagine farm scenerio where we need to keep track of all our chickens.
//Instead of passing around a list of chickens or trying to remember where we last accessed a particular chicken, we can use the registry pattern to provide centralized access.

class Chicken {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

class ChickenRegistry {
  #chickens = new Map();

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error("Chicken must have an id");
    }
    this.#chickens.set(chicken.id, chicken);
  }

  getChicken(id) {
    return this.#chickens.get(id);
  }

  removeChicken(id) {
    this.#chickens.delete(id);
  }

  getAllChickens() {
    return [...this.#chickens.values()];
  }
}

const chicken1 = new Chicken(1, "Henrietta", 3, "Silkie");
const chicken2 = new Chicken(2, "Banjo", 3, "Leghorn");

const farm = new ChickenRegistry();
farm.addChicken(chicken1);
farm.addChicken(chicken2);

//Let's take a look at our websocket chet application
//Room class and user class
