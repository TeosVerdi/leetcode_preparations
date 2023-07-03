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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return validate(-Infinity, root, +Infinity);
};

var validate = (leftCap, root, rightCap) => {
    if (!root) return true;
    if (root.val <= leftCap || root.val >= rightCap) {
        return false;
    }
    return validate(leftCap, root.left, root.val) && validate(root.val, root.right, rightCap);
}