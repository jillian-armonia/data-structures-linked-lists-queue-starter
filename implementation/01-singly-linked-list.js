// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let node = new SinglyLinkedNode(val);

        if (!this.head){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here - O(1)
    }

    addToTail(val) {
        // Write your hypothesis on the time complexity of this method here - O(n)

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }


        this.length++;
        return this;
    }

    removeFromHead() {
        if (this.length === 0){
            return undefined
        }

        let removed = this.head;
        this.head = this.head.next;

        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here O(1)
    }

    removeFromTail() {
        if (this.length === 0){
            return undefined
        }

        let current = this.head;
        let removed;

        if (!current.next){
            removed = current;
            this.head = null;
        } else {
            while(current.next.next){
                current = current.next;
            }

            removed = current.next;
            current.next = null;
        }

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here O(n)
    }

    peekAtHead() {
        if (length > 0) return this.head.value;

        // Write your hypothesis on the time complexity of this method here O(1)
    }

    print() {
        if (this.length === 0) return;

        let current = this.head;

        while (current){
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
