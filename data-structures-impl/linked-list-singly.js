/**
 * Linked List (Singly)
 */
class Node {
  constructor(elem) {
    this.element = elem;
    this.next = null;
    // doubly
    // this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(elem) {
    let node = new Node(elem);

    if (this.head == null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      // doubly
      // node.prev = currentNode
      currentNode.next = node;
    }

    this.size++;
  }

  addAt(index, elem) {
    if (index < 0 || index > this.size) {
      return false;
    }

    let node = new Node(elem);

    if (index == 0) {
      // doubly
      // this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode;

      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = node;
      node.next = currentNode;
      // doubly
      // node.prev = prevNode;
    }

    this.size++;
  }

  remove(elem) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      if (currentNode.element == elem) {
        if (prevNode == null) {
          this.head = currentNode.next;
          // doubly
          // currentNode.next.prev = null;
        } else {
          prevNode.next = currentNode.next;
          // doubly
          // currentNode.next.prev = prevNode;
        }
        this.size--;
        return currentNode.element;
      }

      prevNode = currentNode;

      currentNode = currentNode.next;
    }

    return -1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    let currentNode = this.head;

    if (index == 0) {
      this.head = currentNode.next;
      // doubly
      // currentNode.next.prev = null;
    } else {
      let currentIndex = 0;
      let prevNode;

      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = currentNode.next;
      // doubly
      // currentNode.next.prev = prevNode;
    }

    this.size--;
    return currentNode.element;
  }

  indexOf(elem) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (elem == currentNode.element) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  getList() {
    let currentNode = this.head;
    let result = [];

    while (currentNode) {
      result.push(currentNode.element);
      currentNode = currentNode.next;
    }

    return result;
  }
}

var ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.addAt(1, 3);
ll.removeAt(2);

console.log(ll.getList());
