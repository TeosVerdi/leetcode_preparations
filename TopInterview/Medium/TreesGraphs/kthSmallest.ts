// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// The tree is inorder sorted.

import TreeNode from "./TreeNode";

function kthSmallest(root: TreeNode, k: number): number {
    const stack: number[] = [];

    const inorder = (root: TreeNode) => {
        if (stack.length !== k) {
            if (root.left) inorder(root.left);
            stack.push(root.val);
            if (root.right) inorder(root.right);
        }
    }
    inorder(root);
    return stack[k - 1];
};

