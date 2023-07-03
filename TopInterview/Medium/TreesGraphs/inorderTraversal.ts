// Given the root of a binary tree, return the inorder traversal of its nodes' values.

import TreeNode from './TreeNode';

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [root.val];
    }
    return inorderTraversal(root.left).concat(root.val).concat(inorderTraversal(root.right));
};