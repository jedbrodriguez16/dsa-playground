/**
 * Given an array, build a heap
 */

function MaxHeap() {
  this.heap = [];

  this.add = function (data) {
    this.heap.push(data);

    if (this.heap.length > 1) {
      var idx = this.heap.length - 1;

      while (this.heap[idx] > this.heap[Math.floor((idx - 1) / 2)]) {
        var parentIndex = Math.floor((idx - 1) / 2);

        //swap current with parent
        [this.heap[idx], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[idx],
        ];

        if (parentIndex > 0) {
          idx = parentIndex;
        } else {
          break;
        }
      }
    }
  };

  this.remove = function (data) {};
}
