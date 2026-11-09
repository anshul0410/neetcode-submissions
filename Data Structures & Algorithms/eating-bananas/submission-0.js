class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const canFinish = (k) => {
            let hourSpent = 0
            for (const count of piles) {
                hourSpent += Math.ceil(count / k)
            }
            return hourSpent <= h
        }
        
        let left = 1;
        let right = Math.max(...piles)
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (canFinish(mid)) right = mid
            else left = mid + 1
        }

        return left
    }
}
