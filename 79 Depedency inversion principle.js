//High-level modules (main application logic) should not depend directly on low level modules (like specific tools or libraries)
//Both should depend on abstractions (interfaces or general ideas)

//Imagine you are building an application where users can sign in. Initially, users sign in using a username and password
//But in the future, you might want to allow sign-in using email, phone number, or even third party providers like Google

//if you tightly couple your authentication mechanism to a specific method, every time you want to introduce a new method, you will end up rewriting a significant part of your code,

class UsernamePasswordAuth {
  authenticate(username, password) {
    //login to authenticate using username and password
  }
}

class User {
  login(username, password) {
    const auth = new UsernamePasswordAuth();
    return auth.authenticate(username, password);
  }
}

//With Depedency inversion principle
//you create an abstract Authmethod and ensure that your main User class depends on this abstraction, not a specific implemetation.
//This way, adding new authentication method becomes more easier.

//abstract authentication method
class AbstractAuthMethod {
  authenticate(creds) {
    throw new Error("This method should be overriden.");
  }
}

class UsernamePasswordAuth extends AbstractAuthMethod {
  authenticate({ username, password }) {
    //logic to authenticate using username and password
  }
}

class EmailAuth extends AbstractAuthMethod {
  authenticate({ username, password }) {
    //logic to authenticate using username and password
  }
}

class User {
  constructor(authMethod) {
    if (!(authMethod instanceof AbstractAuthMethod)) {
      throw new Error("Invalid authentication method");
    }
    this.authMethod = authMethod;
  }
  login(credentials) {
    return auth.authenticate(credentials);
  }
}

//By using DIP in our authentication example, the user class doesnot need to change every time we introduce a new way to authenticate.
//we just create a new class extending AuthMethod and pass it to user class. This abstraction ensures that our main logic remains stable and unaffected by changes in lower level modules (different authentication mechanisms)
