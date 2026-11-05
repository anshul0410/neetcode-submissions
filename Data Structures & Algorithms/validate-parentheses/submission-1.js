class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let couples = {
            ')': '(',
            '}': '{',
            ']': '[' 
        }
        let stack = []
        for (let ch of s) {
            if (ch === '{' || ch === '(' || ch === '[') stack.push(ch)
            else if (stack.pop() !== couples[ch]) return false
        }
        return stack.length === 0
    }
}
