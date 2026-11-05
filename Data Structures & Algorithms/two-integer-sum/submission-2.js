class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map()
        for (let i=0; i<nums.length; i++) {
            if (hashMap.has(target - nums[i])) return [hashMap.get(target - nums[i]), i]
            hashMap.set(nums[i], i)
        }
    }
}
