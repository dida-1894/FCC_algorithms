/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

  var addTwoNumbers = function(l1, l2) {
      /**
       * This recursive function takes the nodes from
       * the singly linked list l1 and l2 and sums the value.
       *
       * @param l1 is a ListNode to be summed.
       * @param l2 is a ListNode to be summed.
       * @param currentSumListNode is a ListNode that will value for the sum of l1 and l2.
       * @param prevSumListNode is a ListNode that is the previous node of the sumList.
       * @param carry is a Number that is carried from previous additions.
       * @return A ListNode that is the tail of the sumList
       */
      const add = (l1, l2, currentSumListNode, prevSumListNode, carry) => {
          // Sometimes, l1 and l2 does not have equal number of nodes
          // but addition still has to work. So initialize with ListNode of value 0
          if (l1 === null) {
              l1 = new ListNode(0);
          }
          if (l2 === null) {
              l2 = new ListNode(0);
          }

          let sum = l1.val + l2.val + carry;
          let newCarry = Math.floor(sum/10); // the carry for the next addition
          let newValue = sum%10; // the value for this sumListNode
          currentSumListNode.val = newValue; // Set value to what was computed

          // Set previous sumList node
          if (prevSumListNode !== null) {
              prevSumListNode.next = currentSumListNode;
          }

          if (l1.next === null && l2.next === null && newCarry === 0) {
              // base case is when there is nothing else to sum from l1 and l2
              // and when there is no carry from the last addition
              return currentSumListNode;
          } else {
              // recursively sum next node in l1 and l2
              return add(l1.next, l2.next, new ListNode(0), currentSumListNode, newCarry);
          }
      };

      const results = new ListNode(0);

      add(l1, l2, results, null, 0);

      return results;
  };

console.log(addTwoNumbers([2,4,3], [5,6,4]))
