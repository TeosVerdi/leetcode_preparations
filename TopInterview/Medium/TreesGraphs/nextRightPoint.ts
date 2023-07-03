// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

import Node from './Node';

function connect(root: Node | null): Node | null {
    if (root === null) {
        return null;
    }
    let stack: Node[] | null = [root];
    while (stack.length) {
        for (let i = 0; i < stack.length; i++) {
            if (i < stack.length - 1) {
                stack[i].next = stack[i + 1]
            } else {
                stack[i].next = null;
            }
        }
        const newStack: Node[] = [];
        for (let node of stack) {
            if (node.left && node.right) {
                newStack.push(node.left);
                newStack.push(node.right);
            }
            else {
                return root;
            }
        }
        stack = newStack;
    }
    return null;
};