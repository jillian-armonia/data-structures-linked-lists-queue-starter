// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        // Write your hypothesis on the time complexity of this method here O(1)

        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0){
            this.tail.next = newNode
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        // Write your hypothesis on the time complexity of this method here O(1)
    }

    removeFromHead() {
        let removed = this.head;

        if (this.length > 1 && removed){
            this.head = removed.next;
            this.head.prev = null;

            this.length--;
            return removed.value;
        } else if (this.length === 1){
            this.head = removed.next;
            this.length--;
            return removed.value;
        }



        // Write your hypothesis on the time complexity of this method here O(1)
    }

    removeFromTail() {
        let removed = this.tail;

        if (this.length > 1 && removed){
            this.tail = removed.prev;
            this.tail.next = null;

            this.length--;
            return removed.value;
        } else if (this.length === 1){
            this.tail = removed.prev;
            this.length--;
            return removed.value;
        }

        // Write your hypothesis on the time complexity of this method here O(1)
    }

    peekAtHead() {
        if (this.length > 0) return this.head.value;

        // Write your hypothesis on the time complexity of this method here O(1)
    }

    peekAtTail() {
        if(this.length > 0) return this.tail.value;

        // Write your hypothesis on the time complexity of this method here O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
