class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let best = 0
        let max = 0
        let prev = 0
        let charMap = new Map()

        for (let i = 0; i < s.length; i++) {
            charMap.set(s[i], (charMap.get(s[i]) || 0) + 1)
            max = Math.max(max, charMap.get(s[i]))

            while (i - prev + 1 - max > k) {
                charMap.set(s[prev], charMap.get(s[prev]) - 1)
                prev++
            }

            best = Math.max(best, i - prev + 1)
        }
        return best
    }
}
