export class Stack {
    arr = [];

    push(value) {
        return this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    top() {
        return this.arr.at(-1);
    }

    get length() {
        return this.arr.length;
    }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(3);
// stack.push(5);
// stack.push(2);
// stack.push(4); // 5
// console.log(stack.length); // 5
// stack.pop(); // 4
// console.log(stack.top()); // 2;