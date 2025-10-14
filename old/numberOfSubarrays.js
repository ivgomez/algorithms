var numberOfSubarrays = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;
    
    for (const num of nums) {
        curr += num % 2;
        ans += counts.get(curr - k) || 0;
        console.log(ans)
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }
    console.log(counts)
    return ans;
};

numberOfSubarrays([1, 1, 2, 1, 1], 3)
//prefix = [1, 2, 3, 4]
