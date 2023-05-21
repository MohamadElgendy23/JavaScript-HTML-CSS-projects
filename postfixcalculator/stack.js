//stack implementation for postfix calculator
export class Stack {
    constructor() {
        this.items = [];
    }

    //push to top
    push(item) {
        this.items.push(item);
    }

    //pop top element
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
        return 'Empty';
    }

    //return top element
    peek() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1];
        }
        return 'Empty';
    }

    //is this.items empty?
    isEmpty() {
        return this.items.length === 0;
    }

    //return this stack items
    getItems() {
        return [...this.items];
    }

}