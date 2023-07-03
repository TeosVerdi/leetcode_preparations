/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const orderStack = [];
    let tempStack = [root];
    while (tempStack.length > 0) {
        const newTempStack = [];
        const valStack = [];
        for (let i = 0; i < tempStack.length; i++) {
            valStack.push(tempStack[i].val);
            if (tempStack[i].left) {
                newTempStack.push(tempStack[i].left);
            }
            if (tempStack[i].right) {
                newTempStack.push(tempStack[i].right);
            }
        }
        orderStack.push(valStack);
        tempStack = newTempStack;
    }

    return orderStack;
};
