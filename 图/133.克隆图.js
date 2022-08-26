/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const visited = new Map()

    const dfs = (node) => { 
        if (node == null) {
            return node
        }
        if (visited.has(node)) {
            return visited.get(node)
        }
        let cloneNode = new Node(node.val)
        visited.set(node, cloneNode)
        for (let neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor))
        }
        return cloneNode
    }
    
    return dfs(node)

};



// @lc code=end

