/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function (numCourses, prerequisites) {
    const vertices = [] // 顶点
    const adjList = new Map() // 邻接表
    let flag = true
    
    for (let i = 0; i < numCourses; i++) {
        vertices[i] = i
        adjList.set(vertices[i], [])
    }
    
    const colors = []
    for (let i = 0; i < numCourses; i++) {
        colors[vertices[i]] = 0
    }    
    
    for (let neighbors of prerequisites) {
        adjList.get(neighbors[1]).push(neighbors[0])
    }
    // console.log(adjList);
    const visitGraph = (u) => {
        colors[u] = 1
        const neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (colors[w] === 0) {
                colors[w] = 1
                visitGraph(w)
                if (flag == false) {
                    return
                }
            } else if (colors[w] == 1) {
                flag = false
                return
            }
        }
        colors[u] = 2
    }

    for (let i = 0; i < numCourses; i++) {
        if (colors[vertices[i]] === 0) {
            visitGraph(vertices[i])
        }
        if (flag == false) {
            return flag
        }
    }

    return flag
};
// @lc code=end

