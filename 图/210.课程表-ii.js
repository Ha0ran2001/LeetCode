/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let valid = true
    const result = []
    const vertices = []
    const adjList = []
    const color = []
    let index = numCourses - 1

    for (let i = 0; i < numCourses; i++) {
        vertices[i] = i
        adjList[vertices[i]] = []
        color[vertices[i]] = 0
    }
    for (let neighbors of prerequisites) {
        adjList[neighbors[1]].push(neighbors[0])
    }

    for (let i = 0; i < numCourses; i++) {
        if (color[vertices[i]] === 0) {
            visit(vertices[i])
        }
    }

    if (valid == false) {
        return []
    }

    return result

    function visit(u) {
        color[u] = 1
        for (let w of adjList[u]) {
            if (color[w] === 0) {
                visit(w)
                if (valid == false) {
                    return
                }
            } else if (color[w] == 1) {
                valid = false
                return
            }
        }
        result[index--] = u
        color[u] = 2
    }
};
// @lc code=end

