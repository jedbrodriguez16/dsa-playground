/** JS build-in Stack
 * var stack = [];
 * stack.push(val); -> push
 * stack.pop(); -> pop
 * stack[stack.length-1] -> peek
 * stack.length -> size
 * stack.length == 0 -> isEmpty() 
 */

function Stack() {
    this.store = {};
    this.count = 0;

    this.push = function(value) {
        this.store[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var value = this.store[this.count];
        delete this.store[this.count];
        return value;
    }

    this.peek = function() {
        return this.store[this.count - 1];
    }

    this.size = function () {
        return this.count;
    }
}

var myStack = new Stack();

myStack.push("a");
myStack.push("b");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.store);