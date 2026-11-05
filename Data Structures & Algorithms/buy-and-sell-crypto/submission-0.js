class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let min = 0

        for (let i=0; i < prices.length; i++) {
            profit = Math.max(profit, prices[i] - prices[min])
            if (prices[i] < prices[min]) min = i
        }

        return profit
    }
}
