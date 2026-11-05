class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {}
        for (let i=0; i<nums.length; i++) {
            hashMap[nums[i]] = i
        }
        for (let j=0; j<nums.length; j++) {
            let diff = target - nums[j]
            if (hashMap[diff] && hashMap[diff] !== j) return [j, hashMap[diff]]
        }
        return []
    }
}
