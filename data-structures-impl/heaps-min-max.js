/* Heaps */

// left child: (i * 2) + 1
// right child: (i * 2) + 2
// parent: (i-1) / 2
let MinHeap = function () {
  let heap = []; // array index starts at 0;

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 1) {
      let idx = heap.length - 1;

      // traverse from last inserted item all the way up to the root (as long as applicable)
      // -> while current < parent
      while (heap[idx] < heap[Math.floor((idx - 1) / 2)]) {
        let parentIndex = Math.floor((idx - 1) / 2);
        // swap current with parent
        [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]];

        // once parentIndex reaches the root, stop traversing up (the last possible swap should be between root and its child)
        if (parentIndex > 0) {
          idx = parentIndex;
        } else {
          break;
        }
      }
    }
  };

  // remove the smallest (root)
  this.remove = function () {
    let smallest = heap[0]; // assigned by reference

    if (heap.length > 1) {
      heap[0] = heap[heap.length - 1]; // assign last item to root

      heap.splice(heap.length - 1); // deletes last item

      if (heap.length == 2) {
        if (heap[1] < heap[0]) {
          [heap[0], heap[1]] = [heap[1], heap[0]];
        }

        return smallest; // returns heap[0] reference
      }
      let i = 0;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i + 1;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 2;
        }
        left = 2 * i + 1;
        right = 2 * i + 2;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(0, 1);
    } else {
      heap.splice(0);
    }

    return smallest; // returns heap[0] reference
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 0) {
      result.push(this.remove());
    }
    return result;
  };

  this.print = () => heap;
};

let MaxHeap = function () {
  let heap = []; // array index starts at 0;

  this.insert = function (num) {
    // add to end of the list
    heap.push(num);

    // if items count is more than 1, heapify the tree
    if (heap.length > 1) {
      let idx = heap.length - 1;

      // traverse from last inserted item all the way up to the root (as long as applicable)
      // -> while current < parent
      while (heap[idx] > heap[Math.floor((idx - 1) / 2)]) {
        let parentIndex = Math.floor((idx - 1) / 2);
        // swap current with parent
        [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]];

        // once parentIndex reaches the root, stop traversing up (the last possible swap should be between root and its child)
        if (parentIndex > 0) {
          idx = parentIndex;
        } else {
          break;
        }
      }
    }
  };

  // remove the largest (root)
  this.remove = function () {
    let largest = heap[0]; // assigned by reference

    if (heap.length > 1) {
      heap[0] = heap[heap.length - 1]; // assign last item to root

      heap.splice(heap.length - 1); // deletes last item

      if (heap.length == 2) {
        if (heap[1] > heap[0]) {
          [heap[0], heap[1]] = [heap[1], heap[0]];
        }

        return largest; // returns heap[0] reference
      }
      let i = 0;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i + 1;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 2;
        }
        left = 2 * i + 1;
        right = 2 * i + 2;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 1) {
      heap.splice(0, 1);
    } else {
      return null;
    }

    return largest; // returns heap[0] reference
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 0) {
      result.push(this.remove());
    }
    return result;
  };

  this.print = () => heap;
};

console.log("----------- MIN HEAP ------------ ");

var minHeap = new MinHeap();
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(5);
minHeap.insert(1);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(1);

console.log(minHeap.print());
console.log(minHeap.sort());
console.log(minHeap.print());

console.log("----------- MAX HEAP ------------ ");

var maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(5);
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log(maxHeap.print());
console.log(maxHeap.sort());
console.log(maxHeap.print());
