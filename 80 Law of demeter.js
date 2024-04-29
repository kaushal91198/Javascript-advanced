//The main idea is to ensure that our objects don't reveal too much about their struture or their collaborators structures
//Consider a scenerio where cats have a favorite toy and each toy has a color
//if someone wants to know the color of cat's favourite toy, it would be inappropriate for them to directly inquire about toy's color from teh cat object

// class Wallet {
//   constructor(money) {
//     this.money = money;
//   }

//   getMoney() {
//     return this.money;
//   }
// }

// class Person {
//   constructor(wallet) {
//     this.wallet = wallet;
//   }

//   getWallet() {
//     return this.wallet;
//   }
// }

// class ShoppingMall {
//   chargeCustomer(person, amount) {
//     let wallet = person.getWallet();
//     let money = wallet.getMoney();
//     wallet.money = money - amount; // Violates LoD
//   }
// }

// let wallet = new Wallet(100);
// let person = new Person(wallet);
// let mall = new ShoppingMall();

// mall.chargeCustomer(person, 50);

//By principle

class Wallet {
  constructor(money) {
    this.money = money;
  }

  debit(amount) {
    this.money -= amount;
  }

  getMoney() {
    return this.money;
  }
}

class Person {
  constructor(wallet) {
    this.wallet = wallet;
  }

  getWallet() {
    return this.wallet;
  }

  payAmount(amount) {
    this.wallet.debit(amount);
  }
}

class ShoppingMall {
  chargeCustomer(person, amount) {
    person.payAmount(amount);
  }
}

let wallet = new Wallet(100);
let person = new Person(wallet);
let mall = new ShoppingMall();

mall.chargeCustomer(person, 50);
