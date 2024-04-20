class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.startingNum = startingNum;
    this.incrementAmt = incrementAmt;
  }
  start() {
    setInterval(
      function () {
        console.log(this.startingNum, "this.startingNum");
        this.startingNum += this.incrementAmt;
      }.bind(this),
      1000
    );
  }
}

const count = new Counter(1, 3);
console.log(count.start());

class Counter12 {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.startingNum = startingNum;
    this.incrementAmt = incrementAmt;
  }
  start() {
    setInterval(this.incrementAmtAndPrint.bind(this), 1000);
  }
  incrementAmtAndPrint() {
    this.startingNum += this.incrementAmt;
  }
}

const count12 = new Counter12(1, 3);
console.log(count.start());
