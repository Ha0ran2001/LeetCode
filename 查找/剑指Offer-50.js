/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {

    // 1
    for (let v of s) {
        if (s.indexOf(v) === s.lastIndexOf(v)) {
            return v;
        }
    }
    return ' ';

    // 2
    if (!s.length) {
        return ' ';
    }
    let map = new Map();
    for (let v of s) {
        map.set(v, (map.get(v) || 0) + 1);
    }
    for (let v of map) {
        if (v[1] === 1) {
            return v[0];
        }
    }
    return ' ';
};