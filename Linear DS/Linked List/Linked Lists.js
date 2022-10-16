// Construct Single Node
class Node {
  constructor(value, address = null) {
    this.value = value;
    this.address = address;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at Beginning
  insertAtBeginning(value) {
    this.head = new Node(value, this.head);
  }

  // Insert at End
  insertAtEnd(value) {
    let node = new Node(value);
    let current;
    // if the list is empty
    if (this.head == null) {
      this.insertAtBeginning(value);
    } else {
      current = this.head;
      while (current.address) {
        current = current.address;
      }
      current.address = node;
    }
  }
  // Insert at Middle
  insertAtMiddle(value, index) {
    if (this.head == null) {
      this.insertAtBeginning(value);
    }
    let node = new Node(value);
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.address;
    }
    node.address = current;
    previous.address = node;
    this.size++;
  }
  // Delete at Beginning
  deleteAtBeginning() {
    if (!this.head) {
      return;
    }
    this.head = this.head.address;
  }

  // Delete at End
  deleteAtEnd() {
    // empty list
    if (!this.head) {
      return;
    }
    // single item in the list
    if (!this.head.address) {
      this.head = null;
    }
    let previous = this.head;
    let current = this.head.address;
    while (current.address) {
      previous = current;
      current = current.address;
    }
    previous.address = null;
  }

  // Delete at Middle
  deleteAtMiddle(index) {
    // empty list
    if (!this.head) {
      return;
    }
    // single item in the list
    if (!this.head.address) {
      this.head = null;
    }

    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.address;
      count++;
    }
    previous.address = current.address;
  }

  // Get IndexOf
  IndexOf(index) {
    let current = this.head.address;
    while (current.address == index) {
      current.address++;
    }
    console.log(current.value);
  }

  // Get Size of list
  SizeOf() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.address;
      count++;
    }

    console.log(`There are total ${count} item in list`);
  }

  // Print list
  printList() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.address;
    }
  }

  // Delete list
  deleteList() {
    this.head = null;
    this.size = 0;
  }

  // Reversing Linkedlist
  reversesList() {
    let node = this.head;
    let previous;
    let tmp;

    while (node) {
      tmp = node.address;
      node.address = previous;
      previous = node;
      console.log("Reverse Order " + previous.value);
      node = tmp; 
    }
   

  }

  // Convert LinkedList to Array
  convertArray() {
    let arr= [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.address;
    }
    console.log(arr);

  }

  // Traverse the list
  traverse() {
    let current = this.head;
    while (current) {
      current = current.address;
    }
  }
}

const list = new LinkedList();
list.insertAtBeginning(10);


// list.insertAtBeginning(11);

list.insertAtEnd(30);
// list.insertAtMiddle(20, 1);
// list.deleteAtBeginning();
// list.deleteAtEnd();
// list.deleteAtMiddle(1);
// list.IndexOf(1);
// list.deleteList();
// list.SizeOf();
// list.printList();
list.convertArray();
list.reversesList();
// list.traverse();


