import TreeNode from "./TreeNode";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (inorder.length > 0) {
        let preorderFirstVal = preorder.shift();
        let inorderIndex = inorder.findIndex((val) => preorderFirstVal === val);
        const root = new TreeNode(inorder[inorderIndex]);
        root.left = buildTree(preorder, inorder.slice(0, inorderIndex));
        root.right = buildTree(preorder, inorder.slice(inorderIndex + 1));
        return root;
    }
    return null;
};