class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length
        let prefix = new Array(len)
        let suffix = new Array(len)

        prefix[0] = 1
        for (let i=1; i < len; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        suffix[len - 1] = 1
        for (let j = len - 2; j >= 0; j--) {
            suffix[j] = suffix[j + 1] * nums[j + 1]
        }

        let output = []
        for (let k = 0; k < len; k++) {
            output[k] = prefix[k] * suffix[k]
        }
        return output
    }
}
