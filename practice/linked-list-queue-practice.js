// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        //O(n)
        let curr = this.head;
        let length = 0;

        while(curr){
            curr = curr.next;
            length++;
        }

         return length;

        //O(1)
        //Create a length prop in the constructor
        //Add to the length whenever addToTail is called
        //Return the length prop when listLength() is called

        // Implement in O(n) and in O(1) time complexity

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let curr = this.head;
        let sum = 0;

        while(curr){
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
        //This is an O(n) because it traverses through all the nodes
    }

    averageValue() {
        // Returns the average value of all the nodes
        let length = this.listLength();
        let sum = this.sumOfNodes();

        return sum / length;

        // Write your hypothesis on the time complexity of this method here
        //O(n) because listLength() and sumOfNodes() use iteration
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
            let curr = this.head;
            while (n >= 1){
                curr = curr.next;
                n--;
            }

            return curr

        // Write your hypothesis on the time complexity of this method here
        //O(n) because it iterates through the node list
    }

    findMid() {
        // Returns the middle node
        let middleN = Math.floor(this.listLength() / 2);
        let mid = this.findNthNode(middleN);

        if (this.listLength() % 2 === 0){
            mid = this.findNthNode(middleN - 1);
            return mid;
        } else return mid;

        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        //O(n) because of listLength() and findNthNode(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newReversed = new SinglyLinkedList();
        let length = this.listLength() - 1;
        let newValue = this.findNthNode(length);

        while (length >= 0){
            newReversed.addToTail(newValue.value);
            length--;
            newValue = this.findNthNode(length);
        }

        return newReversed;
        // Write your hypothesis on the time complexity of this method here
        //O(n^3) because of extra iterations within functions that are inside the while loop
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let originalH = this.head;
        let nextH = this.head.next;
        let length = this.listLength();

        while (length > 1){
            originalH.next = nextH.next;
            nextH.next = this.head;
            this.head = nextH;

            nextH = originalH.next;
            length--;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        let middleN = Math.floor(this.tail.value / 2);
        let middle = this.head;

        if (this.tail.value % 2 === 0){
            while (middleN - 1 > 0){
                middle = middle.next;
                middleN--;
            }
        } else {
            while (middleN > 0){
                middle = middle.next;
                middleN--;
            }
        }


        return middle;

        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            //Pretty much still the same if I had implemented the length trick as well
            //But because the tail had the same value as the length of it, it was a cop out

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newReversed = new DoublyLinkedList();
        let newNode = this.tail;

        while(newNode){
            newReversed.addToTail(newNode.value);
            newNode = newNode.prev;
        }

        return newReversed
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let originalH = this.head;
        let nextH = this.head.next;


        while (this.head !== this.tail){
            originalH.next = nextH.next;
            originalH.prev = nextH;
            nextH.next = this.head;
            this.head = nextH;
            this.head.prev = null;

            nextH = originalH.next;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(n) because of the iteration
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
