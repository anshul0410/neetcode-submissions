class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let firstIndex = -1
        let secondIndex = -1
        let flag = false
        for (let i=0; i<nums.length; i++) {
            let residual = target - nums[i]
            firstIndex = i
            for (let j=i+1; j<nums.length; j++) {
                if (residual - nums[j] === 0) {
                    secondIndex = j
                    flag = true
                    break;
                }
            }
            if (flag) break;
        }
        return [firstIndex, secondIndex]
    }
}
