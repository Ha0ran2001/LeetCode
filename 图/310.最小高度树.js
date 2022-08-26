/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
    const ans = []
    if (n == 1) {
        ans.push(0)
        return ans
    }
    const adjList = Array(n).fill().map(() => [])
    // 无向图的邻接表构建
    for (let edge of edges) {
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
    }
    const parent = Array(n).fill(-1) // 这是记录每个节点的父节点是谁
    let x = findLongestNode(0, parent, adjList) // 找到0的最远节点
    let y = findLongestNode(x, parent, adjList) // 找到x的最远节点
    const path = [] // 记录从y到x经过的节点
    parent[x] = -1 // 将x的父节点设置为-1，这样y找x的时候就不会少走一步
    while (y != -1) {
        path.push(y)
        y = parent[y] // 一直找父节点
    }
    const m = path.length // 记录路径长度 这是最长的路径
    if (m % 2 === 0) {
        ans.push(path[Math.floor(m / 2) - 1])
    }
    ans.push(path[Math.floor(m / 2)])
    return ans
};

const findLongestNode = (u, parent, adjList) => {
    const n = adjList.length
    const Q = [u]
    const visit = Array(n).fill(false)
    visit[u] = true
    let node = -1
    while (Q.length) {
        const curr = Q.shift()
        node = curr
        for (const v of adjList[curr]) {
            if (visit[v] == false) {
                visit[v] = true
                parent[v] = curr
                Q.push(v)
            }
        }
    }
    return node
}
// @lc code=end

