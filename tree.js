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
    console.log({toSumStack});
    debugger

    while (toSumStack.length) {
      let current = toSumStack.pop();
      console.log("current.val", current.val);
      count = count + current.val;
      console.log("current.children", current.children);
      debugger
      for (const child of current.children) {
        toSumStack.push(child);
      }
    }

    return count
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

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
    console.log({toSumStack});
    debugger

    while (toSumStack.length) {
      let current = toSumStack.pop();
      console.log("current.val", current.val);
      count = count + current.val;
      console.log("current.children", current.children);
      debugger
      for (const child of current.children) {
        toSumStack.push(child);
      }
    }

    return count
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
