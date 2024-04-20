// A class should have only one reason to change. It means that a class should only have one job or responsibility
//And in Javascript, this usually just means creating distinct classes for different pieces of functionality rather than having big class handle differnt aspects of the application

//Before
class User {
  constructor(name) {
    this.name = name;
  }
  toJSON() {
    return JSON.stringify(this);
  }
}

//after applying the SRP
class user {
  constructor(name) {
    this.name = name;
  }
}

class userSerializer {
  static toJSON(user) {
    return JSON.stringify(user);
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  authenticate(inputPassword) {
    return (this.password = inputPassword);
  }
}

class UserDataManager {
  static save(user) {
    const db = getDatabaseConnection();
    db.saveUser(user);
  }
}
const user = new User("Alice", "password123");
if (user.authenticate("password123")) {
  UserDataManager.save(user);
}
