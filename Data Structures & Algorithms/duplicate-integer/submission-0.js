class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = {}
        let flag = false
        for (let i=0;i<nums.length;i++) {
            if (!temp[nums[i]]) temp[nums[i]] = 1
            else {
                flag = true
                break;
            }
        }
        return flag
    }
}
