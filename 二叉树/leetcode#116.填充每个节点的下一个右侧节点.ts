/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// 题目意思是把同一层的节点从左往右串起来



const connectTwoNode = (node1: Node, node2: Node): Node => {
  // base case
  if (node1 === null || node2 === null) return;
  // 前序遍历
  node1.next = node2;

  connectTwoNode(node1.left, node2.right);
  connectTwoNode(node2.left, node2.right);
  // 根节点的左右子树串起来
  connectTwoNode(node1.right, node2.left);
}

function connect(root: Node | null): Node | null {
  // base case
  if (!root) return null;

  connectTwoNode(root.left, root.right);
  return root;
};