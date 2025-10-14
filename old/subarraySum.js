var subarraySum = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;

    for (const num of nums) {
        curr += num;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }
    console.log(counts)
    return ans;
};

subarraySum([1, 2, 1, 2, 1], 3)
// prefix = [1, 3, 4, 6, 7]

subarraySum([1, -1, 1, -1], 0)
// prefix = [1, 0, 1, 0]