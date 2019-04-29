/*
https://www.programcreek.com/2014/10/leetcode-maximum-size-subarray-sum-equals-k-java/
*/

function maxSubArrayLen(nums, k) {
    let map = {};
    let max = 0;
    let sum = 0;

    for(let i=0; i < nums.length; i++) {
        sum += nums[i];
        if(sum === k) {
            max = Math.max(max, i+1);
        }

        let diff = sum - k;
        if(diff in map) {
            max = Math.max(max, i - map[diff]);
        }

        if(!(sum in map)){
            map[sum] = i;
        }
    }
    return max;
}

nums = [1, -1, 5, -2, 3];
k = 3;

console.log(maxSubArrayLen(nums, k));