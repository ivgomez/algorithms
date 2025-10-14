/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let counts = new Map();
    for (const arr of nums) {
        for (const x of arr) {
            counts.set(x, (counts.get(x) || 0) + 1);
        }
    }
    console.log(counts)
    let n = nums.length;
    let ans = [];
    for (const [key, val] of counts) {
        if (val == n) {
            ans.push(key);
        }
    }
    
    ans.sort((a, b) => a - b);
    return ans;
};

intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])