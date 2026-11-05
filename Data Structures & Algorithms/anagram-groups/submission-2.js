class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // SOL 1
        // let map = new Map()

        // for (let i=0; i < strs.length; i++) {
        //     let sortedStr = strs[i].split('').sort().join('')
        //     if (!map.has(sortedStr)) map.set(sortedStr, [])
        //     map.get(sortedStr).push(strs[i])
        // }
        // return Array.from(map.values())

        // SOL 2
        let map = new Map()
    
        for (let i=0; i<strs.length; i++) {
            let count = new Array(26).fill(0)
            for (const c of strs[i]) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            let key = count.join(',')
            if (!map.has(key)) map.set(key, [])
            map.get(key).push(strs[i])
        }
        return Array.from(map.values())
    }
}
