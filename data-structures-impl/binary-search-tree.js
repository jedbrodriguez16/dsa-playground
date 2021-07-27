/**
 * Binary Search Tree
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  print() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      let insert = (node, newNode) => {
        if (newNode.data < node.data) {
          // insert left
          if (node.left == null) {
            node.left = newNode;
          } else {
            insert(node.left, newNode);
          }
        } else if (newNode.data > node.data) {
          // insert right
          if (node.right == null) {
            node.right = newNode;
          } else {
            insert(node.right, newNode);
          }
        }
      };
      insert(this.root, newNode);
    }
  }

  remove(data) {
    let findMinNode = function (node) {
      if (node.left == null) {
        // found the left most node
        return node;
      } else {
        // keep finding left most node (recursion)
        return findMinNode(node.left);
      }
    };
    let removeNode = function (node, data) {
      if (node == null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // data is the same with current root data (found)

        // no children
        if (node.left == null && node.right == null) {
          return null;
        }

        // has one children
        if (node.left == null) {
          return node.right;
        } else if (node.right == null) {
          return node.left;
        }

        // has two children
        // find the minimum node on the right subtree
        let tempNode = findMinNode(node.right);
        node.data = tempNode.data;

        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  // start search from the tree root
  find(data) {
    // start search from the root
    let current = this.root;
    // keep going deep (left or right) until value is found
    while (current) {
      if (data == current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    // reached the end of the tree (not found)
    return null;
  }

  // start search from a given node
  findIn(node, data) {
    if (node == null) {
      return null;
    }

    if (data == node.data) {
      return node;
    } else if (data < node.data) {
      return this.findIn(node.left, data);
    } else {
      return this.findIn(node.right, data);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    if (this.find(data) !== null) {
      return true;
    }
    return false;
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    return (
      Math.min(this.findMinHeight(node.left), this.findMinHeight(node.right)) +
      1
    );
  }

  //   findMinHeight(node = this.root) {
  //     if (node == null) {
  //       return -1;
  //     }
  //     let left = this.findMinHeight(node.left);
  //     let right = this.findMinHeight(node.right);
  //     if (left < right) {
  //       return left + 1;
  //     } else {
  //       return right + 1;
  //     }
  //   }
  //   findMaxHeight(node = this.root) {
  //     if (node == null) {
  //       return -1;
  //     }
  //     let left = this.findMaxHeight(node.left);
  //     let right = this.findMaxHeight(node.right);
  //     if (left > right) {
  //       return left + 1;
  //     } else {
  //       return right + 1;
  //     }
  //   }

  inOrder(node = this.root) {
    if (node == null) {
      return null;
    }

    let result = [];
    let traverseInOrder = function (node) {
      if (node.left !== null) {
        traverseInOrder(node.left);
      }
      result.push(node.data);
      if (node.right !== null) {
        traverseInOrder(node.right);
      }
    };

    traverseInOrder(node);
    return result;
  }

  preOrder(node = this.root) {
    if (node == null) {
      return null;
    }

    let result = [];
    let traversePreOrder = function (node) {
      result.push(node.data);
      if (node.left !== null) {
        traversePreOrder(node.left);
      }
      if (node.right !== null) {
        traversePreOrder(node.right);
      }
    };

    traversePreOrder(node);
    return result;
  }

  postOrder(node = this.root) {
    if (node == null) {
      return null;
    }

    let result = [];
    let traversePostOrder = function (node) {
      if (node.left !== null) {
        traversePostOrder(node.left);
      }
      if (node.right !== null) {
        traversePostOrder(node.right);
      }
      result.push(node.data);
    };

    traversePostOrder(node);
    return result;
  }

  levelOrder(node = this.root) {
    if (node == null) {
      return null;
    }

    let result = [];
    let q = [];
    q.push(node);
    while (q.length > 0) {
      let node = q.shift();
      result.push(node.data);

      if (node.left !== null) {
        q.push(node.left);
      }
      if (node.right !== null) {
        q.push(node.right);
      }
    }

    return result;
  }

  // incorrect , must check / recur each child to be balanced
  isBalanced(node = this.root) {
    if (node == null) {
      return true; // or null
    }
    let leftHeight = this.findMaxHeight(node.left);
    let rightHeight = this.findMaxHeight(node.right);
    // let diff = Math.abs(leftHeight - rightHeight);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    ) {
      return true;
    }
    return false;
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    return (
      Math.max(this.findMaxHeight(node.left), this.findMaxHeight(node.right)) +
      1
    );
  }
}

var myBST = new BinarySearchTree();

myBST.add(10);
myBST.add(12);
myBST.add(15);
myBST.add(13);
myBST.add(1);
myBST.add(11);
myBST.remove(11);

console.log(JSON.stringify(myBST.print()));
console.log(myBST.find(13));
console.log("Is Present: ", myBST.isPresent(13));

console.log(myBST.find(11));
console.log("Is Present: ", myBST.isPresent(11));

console.log("Min: ", myBST.findMin());
console.log("Max: ", myBST.findMax());

var bst = new BinarySearchTree();

// min and max height
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);
bst.add(22);
bst.add(20);
bst.add(10);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());

// traversing, InOrder, PreOrder, PostOrder
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());

console.log("Is Tree Balanced: ", bst.isBalanced());
bst.add(21);
console.log("Is Tree Balanced: ", bst.isBalanced());
bst.add(19);
console.log("Is Tree Balanced: ", bst.isBalanced());
bst.add(18);
console.log("Is Tree Balanced: ", bst.isBalanced());
