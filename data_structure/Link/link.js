class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
module.exports = class Link{
  constructor() {
    this.head = null
    this.legth = 0
  }

  append(item) {
    let node = new Node(item),
        current //我们需要一个指向列表中current项的变量
    if (this.head == null) {
        this.head = node
      } else {
        current = this.head
        while(current.next){
          current = current.next
        }
        current.next = node//找到最后一项，将其next赋值为node
      }
    this.length++ //更新列表长度
  }
  //列表的最后一个节点的next始终是null

  indexOf(element) {
    let currNode = this.head,
    index = 0
    while (currNode){
      if (currNode.element == element) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  removeAt(position){
    if (postion > -1 && position < length) {
      let current = this.head,
      previous,
      index = 0

      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next //删除current
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }

  insert(position, element){
    if (position >= 0 && position <= length) {
      let node = new Node(element),
      current = this.head,
      previous,
      index = 0
      if (postion === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < postion) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
      }
      this.length++
      return true
    } else {
      console.log("插不进去啦")
      return false
    }
  }

  toString(){
    let current = this.head,
    string = ''
    while (current) {
      string += current.element + "   "
      current = current.next
    }
    return console.log(string)
  }

  remove(element){
    let index = indexOf(element)
    return removeAt(index)
  }

  getHead() {
    return this.head
  }

  isEmpty(){
    return this.length === 0
  }

  size(){
    return this.length
  }

}
