//舞池分配舞伴

const People = [
  {
    name: "one",
    male: "Man"
  },
  {
    name: "two",
    male: "Man"
  },
  {
    name: "three",
    male: "Man"
  },
  {
    name: "four",
    male: "Female"
  },
  {
    name: "five",
    male: "Female"
  },
  {
    name: "six",
    male: "Female"
  },
  {
    name: "seven",
    male: "Female"
  },
  {
    name: "nine",
    male: "Man"
  },
  {
    name: "ten",
    male: "Man"
  },

]

class Queue {
  constructor() {
    this.dataStore = []
  }
  enqueue(ele) {
    this.dataStore.push(ele)
  }
  dequeue() {
    this.dataStore.shift()
  }
  front() {
    return this.dataStore[0]
  }
  back() {
    return this.dataStore[this.dataStore.length - 1]
  }
  empty() {
    if (this.dataStore.length == 0) {
      return true
    } else {
      return false
    }
  }
}

let man = new Queue
let female = new Queue



const getDaner = (man, female) => {
  for (var i = 0; i < People.length; i++) {
    if (People[i].male == "Man") {
      man.enqueue(People[i].name)
    } else {
      female.enqueue(People[i].name)
    }
  }
}

const callName = (man, female) => {
  while (!man.empty() && !female.empty()) {
    console.log("daner is :" + man.front() + "  and   " + female.front())
    man.dequeue()
    female.dequeue()
  }
  console.log("finish other waitting!")
}
getDaner(man, female)
callName(man, female)
