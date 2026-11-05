class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0
        let left = 0
        let lastSeen = new Map()
        for (let right=0; right < s.length; right++) {
            if (lastSeen.has(s[right]) && lastSeen.get(s[right]) >= left) {
                left = lastSeen.get(s[right]) + 1
            }
            lastSeen.set(s[right], right)
            result = Math.max(result, right - left + 1)
        }
        return result
    }
}
