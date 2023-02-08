"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let count = 0;
    let toSumStack = [this];

    if (!this) return count;

    while (toSumStack.length) {
      let current = toSumStack.pop();
      count = count + current.val;
      for (const child of current.children) {
        toSumStack.push(child);
      }
    }

    return count;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;
    let toEvensStack = [this];

    if (!this) return count;

    while (toEvensStack.length) {
      let current = toEvensStack.pop();
      if (current.val % 2 === 0) {
        count++;
      }
      for (const child of current.children) {
        toEvensStack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;
    let comparatorStack = [this];

    if (!this) return count;

    while (comparatorStack.length) {
      let current = comparatorStack.pop();
      if (current.val > lowerBound) {
        count++;
      }
      for (const child of current.children) {
        comparatorStack.push(child);
      }
    }
    return count;
  }
}



class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    let count = 0;
    let toSumStack = [this.root];

    if (!this.root) return count;

    while (toSumStack.length) {
      let current = toSumStack.pop();
      count = count + current.val;
      for (const child of current.children) {
        toSumStack.push(child);
      }
    }

    return count;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    let count = 0;
    let toEvensStack = [this.root];

    if (!this.root) return count;

    while (toEvensStack.length) {
      let current = toEvensStack.pop();
      if (current.val % 2 === 0) {
        count++;
      }
      for (const child of current.children) {
        toEvensStack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;
    let comparatorStack = [this.root];

    if (!this.root) return count;

    while (comparatorStack.length) {
      let current = comparatorStack.pop();
      if (current.val > lowerBound) {
        count++;
      }
      for (const child of current.children) {
        comparatorStack.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
