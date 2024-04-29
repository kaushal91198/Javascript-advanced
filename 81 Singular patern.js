//The singular pattern assures only one instance of a class
//it is also same as modular pattern
//but the key difference is that we will only ever be able to get a single instance of an object, hence the term singleton
//we are not using a class here, but an instance of object, exists only one instance at most
const ChickenFarm = (() => {
  let instance;
  const createInstance = () => ({ totalChickens: 100 });
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

//Only first time it will call the createInstance method
//later it won't call the instance just return variable

//if you are doing things like logging, you could generate a singleton logger to ensure consitant logging
//Database connection
//The redux store in React applications acts as a singleton, ensuring a singular store instance
//Nodejs module system caches module, so repeated require calls for the same module don't recreate the module but return the cached version, acting like a singleton

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connection = this.createConnection();
      //assume create connection establishes a database connection
      DatabaseConnection.instance = this;
    }
    return DatabaseConnection.instance;
  }
  createConnection() {
    console.log("Creating connection to database");
    return { connection: " I m the database connection object" };
  }
}
