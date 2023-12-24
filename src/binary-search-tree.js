const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootN = null;
  }

  root() {
    return this.rootN;
  }

  add(data) {
    const newNode = new Node(data);

    // if tree empty
    if (this.rootN === null) {
      this.rootN = newNode;

      //find place for node
    } else {
      let currentN = this.rootN;

      while (true) {
        if (data < currentN.data) {
          if (!currentN.left) {
            currentN.left = newNode;
            break;
          }
          currentN = currentN.left;
        } else {
          if (!currentN.right) {
            currentN.right = newNode;
            break;
          }
          currentN = currentN.right;
        }
      }
    }
  }

  has(data) {
    let currentN = this.rootN;

    // if doesn't exist
    if (currentN === null) return false;

    //search data
    while (currentN) {
      if (data === currentN.data) return true;

      if (data < currentN.data) {
        currentN = currentN.left;
      } else {
        currentN = currentN.right;
      }
    }
    return false;
  }

  find(data) {
    let currentN = this.rootN;

    // if doesn't exist
    if (currentN === null) return false;

    //search data
    while (currentN) {
      if (data === currentN.data) return currentN;

      if (data < currentN.data) {
        currentN = currentN.left;
      } else {
        currentN = currentN.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootN = this.removeN(this.rootN, data);
  }

  removeN(currentN, searchN) {
    // if doesn't exist
    if (currentN === null) {
      return null;
    }
    //if find search node
    if (searchN === currentN.data) {
      //if no children
      if (currentN.left === null && currentN.right === null) {
        return null;
      }
      //remove the current node and replase with another child
      else if (currentN.left === null) return currentN.right;
      else if (currentN.right === null) return currentN.left;

      // if has both child find smallest and remove current
      let minNode = currentN.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      currentN.data = minNode.data;
      currentN.right = this.removeN(currentN.right, minNode.data);
      return currentN;

      // if search less or greater then current, then moves to the child of current
    } else if (searchN < currentN.data) {
      currentN.left = this.removeN(currentN.left, searchN);
      return currentN;
    } else {
      currentN.right = this.removeN(currentN.right, searchN);
      return currentN;
    }
  }

  min() {
    let currentN = this.rootN;

    //if no node in tree
    if (currentN === null) return null;

    //left left and left again
    while (currentN.left) {
      currentN = currentN.left;
    }

    return currentN.data;
  }

  max() {
    let currentN = this.rootN;

    //if no node in tree
    if (currentN === null) return null;

    //right right and right again
    while (currentN.right) {
      currentN = currentN.right;
    }

    return currentN.data;
  }
}

module.exports = {
  BinarySearchTree,
};
