class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // SOL 1
        // let map = new Map()
        // for (let i=0; i < numbers.length; i++) {
        //     let diff = target - numbers[i]
        //     if (map.has(diff)) return [map.get(diff) + 1, i + 1]
        //     map.set(numbers[i], i)
        // }

        // SOL 2
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            let sum = numbers[left] + numbers[right]
            if (sum < target) left++
            else if (sum > target) right--
            else return [left + 1, right + 1]
        }
        return []
    }
}
