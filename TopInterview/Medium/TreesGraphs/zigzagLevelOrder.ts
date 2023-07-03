// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

import TreeNode from "./TreeNode";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const result: number[][] = [[root.val]];
    let currentCheck: TreeNode[] = [root]
    let ltr = false;
    while (currentCheck.length > 0) {
        const nextCheck: TreeNode[] = [];
        for (let i = 0; i < currentCheck.length; i++) {
            const currentNode = currentCheck[i];
            if (ltr) {
                if (currentNode.left !== null) {
                    nextCheck.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    nextCheck.push(currentNode.right);
                }
            } else {
                if (currentNode.right !== null) {
                    nextCheck.push(currentNode.right);
                }
                if (currentNode.left !== null) {
                    nextCheck.push(currentNode.left);
                }
            }
        }
        ltr = !ltr;
        if (nextCheck.length !== 0) {
            result.push(nextCheck.map(node => node.val));
        }
        nextCheck.reverse();
        currentCheck = nextCheck;
    }

    return result;
};