class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // SOL 1
        // let map = new Map()
        // for (let i=0; i<nums.length; i++) {
        //     map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        // }
        // const entries = [...map]
        // entries.sort((a, b) => b[1] - a[1])
        // return entries.slice(0, k).map(item => item[0])

        // SOL 2
        let map = new Map()
        for (let i=0; i<nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        const bucket = Array.from({ length: nums.length + 1}, () => [])
        console.log(bucket, 'bucket')
        for (const [num, freq] of map) {
            bucket[freq].push(num)
        }
        console.log(bucket, 'after freq')
        let result = []
        for (let freq = bucket.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of bucket[freq]) {
                console.log(freq, 'freq', num, 'num', result.length, 'result.length')
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
