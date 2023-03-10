"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode(node=this, min=Infinity, depthCount=1 ) {

    let current = node;
    console.log({current});
    // debugger

    if (!current.left || !current.right) {
      if (depthCount < min) {
        min = depthCount // progress
      }
      return min
    }
    depthCount++; //progress
    this.minDepthToIncompleteNode(current.left, min, depthCount);
    this.minDepthToIncompleteNode(current.right, min, depthCount);

    return min
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode(node=this.root, min=Infinity, depthCount=1) {
    let current = node;
    debugger;
    if (current === null) return 0;

    if (!current.left || !current.right) {
      if (depthCount < min) {
        min = depthCount
      }
      return min
    }
    depthCount++; //progress

    debugger;
    min = this.minDepthToIncompleteNode(current.right, min, depthCount);
    min = this.minDepthToIncompleteNode(current.left, min, depthCount);

    return min
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {

  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
