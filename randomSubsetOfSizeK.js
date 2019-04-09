// https://en.wikipedia.org/wiki/Reservoir_sampling#Algorithm_R
// https://www.geeksforgeeks.org/reservoir-sampling/
// Reservoir Sampling
function randomSubsetOfSizeK(nums, k) {
    let result = new Array(k).fill(0);

    // Add the first k into our result
    for(let i = 0; i < k; i++) {
        result[i] = nums[i];
    }
    
    for(let i = k; i < nums.length; i++) {
        // Random number from 0 to i
        let j = Math.floor((Math.random() * i) + 0);
        // Replace as we already have the values in the array
        if(j < k) {
            result[j] = nums[i];
        }
    }

    return result;
}

nums = [2, 6, 56, 32, 46, 567, 23, 56, 13, 67, 678, 123];
k = 5;
console.log(randomSubsetOfSizeK(nums, k));