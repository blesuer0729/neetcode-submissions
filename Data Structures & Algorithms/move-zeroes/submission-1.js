class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] !== 0) {
                nums[l] = nums[r];
                l++;
            }
        }
        
        for (let i = l; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}
