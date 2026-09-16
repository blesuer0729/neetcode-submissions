class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) { 
        let result = [];
        let frequnecyMap = new Map();
        let setNums = [...new Set(nums)];
        let orderedFrequencies = [];
        
        for (let i = 0; i < nums.length; i++) {
            if (frequnecyMap.has(nums[i])) {
                let currentFreq = frequnecyMap.get(nums[i]);
                frequnecyMap.set(nums[i], currentFreq+1);
            } else {
                frequnecyMap.set(nums[i], 1);
            }
        };
        console.log(frequnecyMap);

        for (let i = 0; i < setNums.length; i++) {
            let currentValue = frequnecyMap.get(setNums[i]);
            orderedFrequencies.push(currentValue);
        };
        orderedFrequencies.sort((a, b) => b - a);
        orderedFrequencies = orderedFrequencies.splice(0,k);
        console.log(orderedFrequencies);
        
        for (let i = 0; i <= setNums.length; i++) {
            let currentValue = frequnecyMap.get(setNums[i]);
            if (orderedFrequencies.includes(currentValue)) {
                result.push(setNums[i]);
            }
        }

        return result;
    }
}
