class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.startingNum = startingNum;
    this.incrementAmt = incrementAmt;
  }
  start() {
    setInterval(function () {
      console.log(this.startingNum, "this.startingNum");
      this.startingNum += this.incrementAmt;
    }, 1000);
  }
  startWithArrow() {
    setInterval(() => {
      console.log(this.startingNum, "this.startingNum");
      this.startingNum += this.incrementAmt;
    }, 1000);
  }
}

const count = new Counter();
count.start();
count.startWithArrow();

// In arrow function we can see that the keyword this refers to the Counter instance unlike normal function
