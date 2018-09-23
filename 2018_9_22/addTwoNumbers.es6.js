const Link = require("../data_structure/link.js")

let l1 = new Link
let l2 = new Link

l1.append(2)
l1.append(4)
l1.append(5)

l2.append(5)
l2.append(6)
l2.append(4)
l2.append(9)


const addTwoNumbers = (l1, l2) => {
  let sum = new Link
  let l1Temp = l1.getHead()
  let l2Temp = l2.getHead()
  let carry = 0
  while(l1Temp || l2Temp){
    if (l1Temp) {
      carry += l1Temp.element
      l1Temp = l1Temp.next
    }
    if (l2Temp) {
      carry += l2Temp.element
      l2Temp = l2Temp.next
    }
    if (carry >= 10) {
      sum.append(carry - 10)
      carry = 1
    } else {
      sum.append(carry)
      carry = 0
    }
  }
  if (carry === 1) {
    sum.append(1)
  }
  sum.toString()
  return sum
}

addTwoNumbers(l1, l2)
