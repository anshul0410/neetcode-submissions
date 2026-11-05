class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0

        while (left < right) {
            let width = right - left
            let heightCap = Math.min(heights[left], heights[right])
            let volume = width * heightCap
            max = Math.max(max, volume)

            if (heights[left] < heights[right]) left++
            else if (heights[left] > heights[right]) right--
            else {
                if (heights[left + 1] > heights[right - 1]) left++
                else right--
            }
        }
        return max
    }
}
