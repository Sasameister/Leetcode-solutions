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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return root;
    let array = [];
    array.push(root);
    while(array.length !== 0)
    {
        let tmp = array[0].right;
        array[0].right = array[0].left;
        array[0].left = tmp;

        if(array[0].left !== null) array.push(array[0].left);
        if(array[0].right !== null) array.push(array[0].right);
        array.splice(0,1);
    }
    return root;
};