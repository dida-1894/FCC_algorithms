module.exports = class Queue{
  // class Quene {
    constructor() {
      this.dataStore = []
    }
    enqueue(ele) {
      this.dataStore.push(ele)
    }
    dequeue() {
      return this.dataStore.shift()
    }
    front() {
      return this.dataStore[0]
    }
    back() {
      return this.dataStore[this.dataStore.length - 1]
    }
    toString() {
      let str = ""
      for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + "\n"
      }
      return str
    }

    empty() {
      if (this.dataStore.length == 0) {
        return true
      } else {
        return false
      }
    }
  // }

}

// let q = new Quene
// q.enqueue("one")
// q.enqueue("two")
// q.enqueue("three")
// q.enqueue("four")
// q.enqueue("five")
// console.log(q.toString())
//
// q.dequeue()
//
// console.log(q.toString())
//
// console.log("front queue:", q.front())
// console.log("back of queue:",q.back())
