class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = new Map();

        for (const [index, element] of nums.entries()) {
            const answer = target - element;
            if (indices.has(answer)) {
                return [index, indices.get(answer)];
            } else {
                indices.set(element, index);
            }
        };
    }
}
