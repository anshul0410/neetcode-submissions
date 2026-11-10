class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let tempLen = temperatures.length;
        let result = new Array(tempLen).fill(0);
        let stack = [];

        for (let i = 0; i < tempLen; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let lastIndex = stack.pop()
                result[lastIndex] = i - lastIndex
            }
            stack.push(i)
        }

        return result;
    }
}
