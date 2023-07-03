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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let cache = [root];
    while (cache.length !== 0) {
        let newCache = [];
        for (let i = 0; i < cache.length; i++) {
            if (cache[i].left) {
                newCache.push(cache[i].left);
            }
            if (cache[i].right) {
                newCache.push(cache[i].right);
            }
        }
        cache = newCache;
        depth++;
    }
    return depth;
};