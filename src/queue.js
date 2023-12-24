const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {

    let newNode = new ListNode(value);

    // if exist - add next to back
    if (this.back) {
      this.back.next = newNode;
      this.back = newNode;

      // if doesn't exit add as new
    } else {
      this.back = newNode;
      this.front = newNode;
    }

    return this.getUnderlyingList();
  }

  dequeue() {
    
    // if exist - save first elem for return and relink fist elem 
    if (this.front) {
    let removedValue = this.front.value;
    this.front = this.front.next;
    
    // if it exists - removes the reference to the former first element
    if (this.back) {
      this.back = null;
    }
    return removedValue;
  }    
  return null;
  }

  getUnderlyingList() {
    return this.front;
  }
}

module.exports = {
  Queue
};
