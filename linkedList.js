// User defined class node
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions to be implemented
  // add(element)
  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }
  // insertAt(element, location)
  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  // removeFrom(location)
  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }
  // removeElement(element)
  // removes a given element from the
  // list
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  // finds the index of element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterae over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }
  // Helper Methods
  // isEmpty
  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }
  // size_Of_List
  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }
  // PrintList
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
  reverseLinkedList() {
    let curr = this.head,
      prev = null;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  removeSortedDuplicates() {
    let node = this.head;
    while (node !== null && node.next !== null) {
      if (node.element === node.next.element) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
  }

  removeUnsortedDuplicates() {
    if (this.head === null || this.head.next === null) {
      return;
    }
    let curr = this.head,
      next = curr.next,
      cache = {};
    cache[curr.element] = true;

    while (next !== null) {
      var data = next.element;
      if (cache[data]) {
        curr.next = next.next;
      } else {
        cache[data] = true;
        curr = next;
      }
      next = next.next;
    }
  }
}

var ll = new LinkedList();

// adding element to the list
ll.add(10);
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(10);
ll.add(40);
ll.add(50);
ll.add(10);
ll.add(20);
ll.printList();

// 10 => 20 => 30 => 40 => 50
// |     |      |
//null<-10<-20
// pointer
//

ll.reverseLinkedList();
ll.printList();
